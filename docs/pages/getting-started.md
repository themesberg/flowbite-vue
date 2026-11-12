<script setup>
import { FwbAlert } from '../../src/index'
</script>

# Flowbite Vue - Quickstart

Get started with Flowbite Vue by installing it into your Vue 3 project with npm.

Flowbite Vue is a library of Vue 3 components built with Tailwind CSS utility classes, following the Flowbite design system. Interactive components such as modals, dropdowns and tooltips are Vue components too, so there is no separate JavaScript file to load. Learn how to get started by following this quickstart guide.

<br>

::: info
Using Nuxt? Flowbite Vue ships a dedicated module with component/composable auto-import and auto-injected styles — see the [Nuxt guide](/pages/nuxt).
:::

::: info
Make sure that you have [Node.js](https://nodejs.org/en/) installed. Flowbite Vue requires version 22.12 or newer.
```bash
node -v
```
:::

### Install and configure TailwindCSS

1. Install [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) v4.1 or newer as part of `devDependencies`:

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
1. Install **Flowbite Vue**, and optionally **Flowbite** for its theme and form styles (see below), as part of `dependencies`:

```bash
npm i flowbite-vue flowbite
```

2. Update `style.css` file

```css
/* import Flowbite Vue styles */
@import "flowbite-vue/index.css";

/* generate the utility classes Flowbite Vue's components use */
@import "flowbite-vue/tailwind.css";

/* optional: Flowbite's theme and form styles for your own inputs */
@import "flowbite/src/themes/default.css";
@plugin "flowbite/plugin";

/* class-based dark mode, as Flowbite uses */
@custom-variant dark (&:where(.dark, .dark *));
```

`flowbite-vue/index.css` contains only the components' own CSS (transitions, animations, tooltip themes). Your Tailwind build generates the utility classes; `flowbite-vue/tailwind.css` points it at Flowbite Vue's component sources.

`flowbite-vue/index.css` puts its CSS in its own cascade layer, `components.flowbite-vue`, inside Tailwind's `components` layer. Your utility classes, including responsive ones such as `lg:mb-16`, always win over it, whichever file you import first, so you don't need to wrap the import in `layer(...)`.

::: info
`flowbite-vue/tailwind.css` needs Tailwind CSS v4.1 or newer. It doesn't work with a prefix (`@import "tailwindcss" prefix(tw);`): the components use unprefixed classes, and a prefixed build only generates prefixed ones. With a prefix, import `flowbite-vue/standalone.css` instead of `index.css` and `tailwind.css`. It brings the unprefixed utilities the components use, plus its own copy of Tailwind's preflight. Import it **before** Tailwind, so your utilities (for example `tw:rounded-none` on a component) and your base styles come after its copies in each layer and win over them:

```css
@import "flowbite-vue/standalone.css";
@import "tailwindcss" prefix(tw);
```
:::

Flowbite Vue's components don't need the Flowbite theme or plugin (or the `flowbite` package): they use Tailwind's own color palette (`bg-blue-700`, `text-gray-900`, …), not Flowbite's theme variables. The theme and plugin style your own plain `<input>`, `<select>` and `<textarea>` elements the Flowbite way. The plugin reads its colors from theme variables such as `--color-brand`, `--color-body`, `--color-default`, `--color-heading` and `--color-neutral-*`, which only a Flowbite theme defines, so add both or neither. The theme also changes some Tailwind defaults, such as the sans font and `rounded-lg`.

::: info
Not using Tailwind CSS? Import `flowbite-vue/standalone.css` instead: a prebuilt stylesheet with every utility class the components use. Before 0.5.0, `flowbite-vue/index.css` was that prebuilt stylesheet. If you imported it without running Tailwind over Flowbite Vue, switch to `standalone.css`.
:::

3. Now you can use **Flowbite Vue** anywhere in your project and build awesome interfaces:

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

Each component also has its own entry point, which you can import directly or point a component auto-import resolver (for example `unplugin-vue-components`) at. It is the same module the main entry exports, so you can mix both import styles. Styles still come from `flowbite-vue/index.css` (or `standalone.css`).

```js
import FwbButton from 'flowbite-vue/components/FwbButton'
```
