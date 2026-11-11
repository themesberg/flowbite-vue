<script setup>
import { FwbAlert } from '../../src/index'
</script>

# Flowbite Vue - Nuxt

Flowbite Vue ships a first-party Nuxt module that auto-imports every component and the `useToast` composable, and auto-injects the library's stylesheet — no manual `import` statements needed.

### Install

```bash
npm i flowbite-vue
```

### Register the module

Add `flowbite-vue/nuxt` to your `modules` array in `nuxt.config.ts`:

::: code-group

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['flowbite-vue/nuxt'],
})
```

:::

That's it — components are ready to use anywhere in your app with no import statement:

<div class="vp-raw">
  <fwb-alert type="success">
    Success! You can now use Flowbite Vue in your Nuxt application 🎉
  </fwb-alert>
</div>

```vue
<template>
  <fwb-alert type="success">
    Success! You can now use Flowbite Vue in your Nuxt application 🎉
  </fwb-alert>
</template>
```

### Styles

The module auto-injects Flowbite Vue's stylesheet into your Nuxt app, so no `@import "flowbite-vue/index.css"` is needed either. Pick the stylesheet with the `css` option:

- `true` (default): `flowbite-vue/index.css`, the components' own CSS only, for apps running Tailwind CSS v4. Your Tailwind build generates the utility classes, so it has to scan Flowbite Vue's components.
- `'standalone'`: `flowbite-vue/standalone.css`, a full Tailwind build plus the components' CSS, for apps without Tailwind CSS.
- `false`: nothing, so you can import it yourself.

To import the stylesheet yourself, for example to control where it loads relative to your own styles, set `css: false` and add it to Nuxt's own `css` array:

::: code-group

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['flowbite-vue/nuxt'],
  flowbiteVue: {
    css: false,
  },
  css: [
    'flowbite-vue/index.css',
    '~/assets/css/main.css',
  ],
})
```

:::

### Toasts: `useFwbToast`

Flowbite Vue's `useToast` composable is auto-imported under the name **`useFwbToast`**, not `useToast` — this avoids clashing with other ecosystem composables named `useToast` (for example Nuxt UI's). The underlying export from `flowbite-vue` itself is still called `useToast`, so this renaming only applies to the Nuxt auto-import.

```vue
<template>
  <fwb-toast-provider>
    <fwb-button @click="toast.add({ type: 'success', text: 'Hello from Nuxt!', time: 3000 })">
      Show toast
    </fwb-button>
  </fwb-toast-provider>
</template>

<script setup>
const toast = useFwbToast()
</script>
```
