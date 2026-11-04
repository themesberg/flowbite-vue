import path from 'path'

import vue from '@vitejs/plugin-vue'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    vue(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    // src/nuxt/test/ boots a real Nuxt app and runs under vitest.nuxt.config.ts (`npm run test:nuxt`) instead.
    exclude: [...configDefaults.exclude, 'src/nuxt/test/**'],
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
