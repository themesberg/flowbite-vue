import { resolve } from 'path'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig, type Plugin } from 'vite'

import pkg from './package.json' with { type: 'json' }
import { nuxtComponents } from './src/nuxt/generated-components.ts'

// Runtime dependencies and peers stay imports in dist, so consumers dedupe
// them and their `overrides` apply (#470). CSS from a dependency (FwbTooltip
// imports floating-vue's stylesheet) is still bundled into dist/index.css:
// a bare `.css` import in dist would crash plain Node and SSR.
const runtimePackages = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)]
const isExternal = (id: string) =>
  !id.endsWith('.css') && runtimePackages.some(name => id === name || id.startsWith(`${name}/`))

// Fails the build if any JS chunk still contains code from node_modules, for
// example a new dependency that isn't in package.json yet.
function noBundledDependencies (): Plugin {
  return {
    name: 'no-bundled-dependencies',
    generateBundle (_options, bundle) {
      const bundled = new Set<string>()
      for (const file of Object.values(bundle)) {
        if (file.type !== 'chunk') continue
        for (const id of Object.keys(file.modules)) {
          // Dependency CSS is meant to land in dist/index.css (see isExternal).
          if (id.includes('/node_modules/') && !id.endsWith('.css')) bundled.add(id.replace(/^.*\/node_modules\//, ''))
        }
      }
      if (bundled.size) this.error(`Dependency code bundled into dist, add it to package.json: ${[...bundled].join(', ')}`)
    },
  }
}

// One entry per component, built together with the main entry so they share
// chunks: `flowbite-vue` and `flowbite-vue/components/*` load the same module
// instances, so a component's provide/inject keys match whichever path
// imported it. The Nuxt module registers these files too.
const componentEntries = Object.fromEntries(
  nuxtComponents.map(({ name, filePath }) => [`components/${name}`, resolve(import.meta.dirname, `src/${filePath}`)]),
)

// Type entry for each `flowbite-vue/components/<Name>` file, pointing at the
// declaration `build:types` emits for the component's `.vue` file.
function componentDeclarations (): Plugin {
  return {
    name: 'component-declarations',
    generateBundle () {
      for (const { name, filePath } of nuxtComponents) {
        const target = `./${filePath.replace(/^components\//, '')}`
        this.emitFile({
          type: 'asset',
          fileName: `components/${name}.d.ts`,
          source: `export { default } from '${target}'\n`,
        })
      }
    },
  }
}

// Vite tags each chunk's CSS with a `/*$vite$:1*/` comment and removes only the
// first one when `cssCodeSplit: false` merges several chunks into one file.
function stripCssChunkMarkers (): Plugin {
  return {
    name: 'strip-css-chunk-markers',
    enforce: 'post',
    generateBundle (_options, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type === 'asset' && file.fileName.endsWith('.css') && typeof file.source === 'string') {
          file.source = file.source.replaceAll(/\/\*\$vite\$:\d+\*\//g, '')
        }
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    componentDeclarations(),
    noBundledDependencies(),
    stripCssChunkMarkers(),
  ],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src'),
    },
    dedupe: ['vue'],
  },
  build: {
    // All component styles go into the one dist/index.css.
    cssCodeSplit: false,
    target: 'esnext',
    lib: {
      entry: {
        'flowbite-vue': resolve(import.meta.dirname, './src/index.ts'),
        'composables': resolve(import.meta.dirname, './src/composables.ts'),
        ...componentEntries,
      },
      // ESM only. Node >= 22.12 can require() it, and CSS ships as a separate
      // dist/index.css instead of being injected at import time (#473).
      formats: ['es'],
      cssFileName: 'index',
    },
    rollupOptions: {
      external: isExternal,
    },
  },
})
