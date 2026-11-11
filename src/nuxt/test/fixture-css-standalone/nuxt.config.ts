import { defineNuxtConfig } from 'nuxt/config'

// Like ../fixture-css-disabled: only flips `flowbiteVue.css`, here to the
// stylesheet for apps without Tailwind.
export default defineNuxtConfig({
  modules: ['flowbite-vue/nuxt'],
  flowbiteVue: {
    css: 'standalone',
  },
  compatibilityDate: '2026-07-22',
  devtools: { enabled: false },
  telemetry: false,
})
