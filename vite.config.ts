import { readFileSync } from 'fs'
import { resolve } from 'path'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig, type Plugin } from 'vite'

import pkg from './package.json' with { type: 'json' }
import { parseIndexExports } from './src/nuxt/codegen/parse-index-exports.mjs'

const srcDir = resolve(import.meta.dirname, 'src')
const src = (path: string) => resolve(srcDir, path)

// Runtime dependencies and peers stay imports in dist, so consumers dedupe
// them and their `overrides` apply (#470).
const runtimePackages = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)]
const isExternal = (id: string) => runtimePackages.some(name => id === name || id.startsWith(`${name}/`))

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
          if (id.includes('/node_modules/')) bundled.add(id.replace(/^.*\/node_modules\//, ''))
        }
      }
      if (bundled.size) this.error(`Dependency code bundled into dist, add it to package.json: ${[...bundled].join(', ')}`)
    },
  }
}

// The public components exported by src/index.ts (internal helpers excluded),
// one entry each. They are built together with the main entry so they share
// chunks: `flowbite-vue` and `flowbite-vue/components/*` load the same module
// instances, so provide/inject keys match whichever path imported them. The
// Nuxt module registers these files too.
const components = parseIndexExports(readFileSync(src('index.ts'), 'utf8'))

// Types for `flowbite-vue/components/<Name>`: the main entry's declaration of
// that component, at the path package.json "types" already points to.
function componentDeclarations (): Plugin {
  return {
    name: 'component-declarations',
    generateBundle () {
      for (const { name } of components) {
        this.emitFile({
          type: 'asset',
          fileName: `components/${name}.d.ts`,
          source: `export { ${name} as default } from '../index.js'\n`,
        })
      }
    },
  }
}

// Vite tags each chunk's CSS with a `/*$vite$:1*/` comment and removes only the
// first one when `cssCodeSplit: false` merges several chunks into one file
// (its cleanup regex has no `g` flag, Vite 8.3).
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
      '@': srcDir,
    },
    dedupe: ['vue'],
  },
  build: {
    // All component styles go into the one dist/index.css.
    cssCodeSplit: false,
    target: 'esnext',
    lib: {
      entry: {
        'flowbite-vue': src('index.ts'),
        'composables': src('composables.ts'),
        // Runs in Node inside Nuxt; it only imports @nuxt/kit and the component list.
        'nuxt': src('nuxt/module.ts'),
        ...Object.fromEntries(components.map(({ name, filePath }) => [`components/${name}`, src(filePath)])),
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
