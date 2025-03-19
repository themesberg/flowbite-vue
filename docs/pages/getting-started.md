<script setup>
import { FwbAlert } from '../../src/index'
</script>

# Flowbite Vue - Quickstart

Get started with Flowbite by including it into your project using NPM

Flowbite is a library of components built on top of the utility-classes from Tailwind CSS and it also includes a JavaScript file that makes interactive elements works, such as modals, dropdowns, and more. Learn how to get started by following this quickstart guide.

<br>

::: info
Make sure that you have [Node.js](https://nodejs.org/en/) installed. Flowbite Vue requires version 18 or newer.
```bash
node -v
```
:::

### Install and configure TailwindCSS

1. Install [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) as part of `devDependencies`:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

2. Configure the Vite plugin:
::: code-group

```js{3,8} [vite.config.js]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
```
:::

3. Import Tailwind CSS
::: code-group
```css [src/style.css]
@import "tailwindcss";
```
:::

::: info
Remember to `@reference` your main style in `<style>` blocks if you want to use directives from Tailwind CSS.
:::

```vue{2}
<style scoped>
@reference "./style.css";

.custom-class {
  @apply border rounded p-3;
}
</style>
```

### Install and configure Flowbite Vue
1. Install **Flowbite** and **Flowbite Vue** as part of `dependencies`:

```bash
npm i flowbite flowbite-vue
```

2. Update `style.css` file

```css
/* import Flowbite Vue styles */
@import "flowbite-vue/index.css";

/* import Flowbite plugin */
@plugin "flowbite/plugin";

/* add Flowbite Vue directory using @source directive */
@source "../node_modules/flowbite-vue";
```

4. Now you can use **Flowbite Vue** anywhere in your project and build awesome interfaces:

<div class="vp-raw">
  <fwb-alert type="success">
    Success! You can now use Flowbite Vue in your Vue application 🎉
  </fwb-alert>
</div>

```vue
<template>
  <fwb-alert type="success">
    Success! You can now use Flowbite Vue in your Vue application 🎉
  </fwb-alert>
</template>

<script setup>
import { FwbAlert } from 'flowbite-vue'
</script>
```
