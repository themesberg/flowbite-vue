import { resolve } from 'path'

import { defineConfig } from 'vite'

// Separate build for the Nuxt module only. It runs in Node and registers the
// component and composable files built by `./vite.config.ts`. ESM only, like
// the main build: `@nuxt/kit` ships ESM-only, and Nuxt loads modules with
// `import()`.
export default defineConfig({
  build: {
    target: 'esnext',
    emptyOutDir: false,
    lib: {
      entry: {
        nuxt: resolve(import.meta.dirname, './src/nuxt/module.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['@nuxt/kit'],
    },
  },
})
