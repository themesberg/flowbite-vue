import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import { nuxtComponents } from './src/nuxt/generated-components.ts'

// Separate build for the Nuxt module + one lib entry per component: this all
// runs in Node (module.ts) or is dynamically imported by the consumer's own
// Vite build (the component chunks), so it needs `es` output only, like the
// main `./vite.config.ts` build. There's no `cjs` output because
// `@nuxt/kit` ships ESM-only (no `require` condition in its own `exports`
// map at all), so a `require()`'d `.cjs` build of this module would depend on
// Node's native require(esm) interop rather than a real CJS build of its own
// dependency — fragile, and unnecessary since Nuxt itself only ever loads
// modules via ESM `import()`.
//
// Each component gets its own lib entry (not just `module.ts`) so Rollup
// gives it its own output chunk under dist/components/ — genuine
// per-component code splitting for Nuxt's `addComponent`, with code shared
// between components (composables, etc.) automatically split into its own
// shared chunk(s) rather than duplicated per component.
const componentEntries = Object.fromEntries(
  nuxtComponents.map(({ name, filePath }) => [`components/${name}`, resolve(import.meta.dirname, `src/${filePath}`)]),
)

// A few component .vue files have <style> blocks; this build has no
// tailwindcss() plugin (only the main ./vite.config.ts build needs one, to
// produce dist/index.css — see ticket 13), so any CSS emitted here would
// contain un-expanded `@apply` rules. Drop it: consumers get styles from the
// already-correctly-built dist/index.css, and Vue's scopeId hashing is
// derived from each file's path, so the scoped styles compiled by the main
// build still apply correctly to the component chunks built here.
function dropEmittedCss () {
  return {
    name: 'drop-emitted-css',
    enforce: 'post' as const,
    generateBundle (_options: unknown, bundle: Record<string, { type: string }>) {
      for (const fileName of Object.keys(bundle)) {
        if (fileName.endsWith('.css')) Reflect.deleteProperty(bundle, fileName)
      }
    },
  }
}

export default defineConfig({
  plugins: [vue(), dropEmittedCss()],
  build: {
    target: 'esnext',
    emptyOutDir: false,
    // Discarded by dropEmittedCss() below; skip minifying it too, since
    // lightningcss otherwise warns on unexpanded `@apply` rules for no benefit.
    cssMinify: false,
    lib: {
      entry: {
        nuxt: resolve(import.meta.dirname, './src/nuxt/module.ts'),
        composables: resolve(import.meta.dirname, './src/composables.ts'),
        ...componentEntries,
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'vue',
        '@nuxt/kit',
        '@vueuse/core',
        /^@vueuse\/integrations/,
        'floating-vue',
        'lodash-es',
        'nanoid',
        'tailwind-merge',
      ],
    },
  },
})
