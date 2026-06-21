<script setup>
import FwbBlockquoteExample from './typography/blockquote/FwbBlockquoteExample.vue'
import FwbBlockquoteSolidExample from './typography/blockquote/FwbBlockquoteSolidExample.vue'
import FwbBlockquoteAlignExample from './typography/blockquote/FwbBlockquoteAlignExample.vue'
import FwbBlockquoteSizeExample from './typography/blockquote/FwbBlockquoteSizeExample.vue'
</script>

# Blockquote - Flowbite Vue

#### The blockquote component can be used to quote text content from an external source that can be used for testimonials, reviews, and quotes inside an article

---

:::tip Blockquote - Flowbite
Original reference: [https://flowbite.com/docs/typography/blockquote/](https://flowbite.com/docs/typography/blockquote/)
:::

The blockquote component can be used to quote text content from an external source inside a `<fwb-blockquote>` element, with support for alignment, sizing, and a solid card style.

## Default Blockquote

Use the `FwbBlockquote` component to wrap a quoted passage. The default style renders italic bold text with no background.

<fwb-blockquote-example/>

```vue
<template>
  <fwb-blockquote>
    "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
  </fwb-blockquote>
</template>

<script setup>
import { FwbBlockquote } from 'flowbite-vue'
</script>
```

## Solid Background

Use `type="solid"` to apply a solid background with a left border accent, useful for pulling quotes out of surrounding content.

<fwb-blockquote-solid-example />

```vue
<template>
  <fwb-blockquote type="solid">
    "Flowbite is just awesome. Perfect choice for your next SaaS application."
  </fwb-blockquote>
</template>

<script setup>
import { FwbBlockquote } from 'flowbite-vue'
</script>
```

## Alignment

Use Tailwind's `text-left`, `text-center`, and `text-right` utility classes via the `class` prop to control blockquote text alignment.

<fwb-blockquote-align-example />

```vue
<template>
  <fwb-blockquote class="text-left">
    "Flowbite is just awesome. Perfect choice for your next SaaS application."
  </fwb-blockquote>
  <fwb-blockquote class="text-center">
    "Flowbite is just awesome. Perfect choice for your next SaaS application."
  </fwb-blockquote>
  <fwb-blockquote class="text-right">
    "Flowbite is just awesome. Perfect choice for your next SaaS application."
  </fwb-blockquote>
</template>

<script setup>
import { FwbBlockquote } from 'flowbite-vue'
</script>
```

## Size

Use Tailwind's text size utilities via the `class` prop to scale the blockquote to match the surrounding content hierarchy.

<fwb-blockquote-size-example />

```vue
<template>
  <fwb-blockquote class="text-lg">
    "Flowbite is just awesome. Perfect choice for your next SaaS application."
  </fwb-blockquote>
  <fwb-blockquote class="text-xl">
    "Flowbite is just awesome. Perfect choice for your next SaaS application."
  </fwb-blockquote>
  <fwb-blockquote class="text-2xl">
    "Flowbite is just awesome. Perfect choice for your next SaaS application."
  </fwb-blockquote>
</template>

<script setup>
import { FwbBlockquote } from 'flowbite-vue'
</script>
```

## Blockquote component API

### FwbBlockquote Props

| Name  | Type                   | Default     | Description                                                              |
| ----- | ---------------------- | ----------- | ------------------------------------------------------------------------ |
| type  | `'default' \| 'solid'` | `'default'` | `solid` adds a background fill and left border accent.                   |
| cite  | `String`               | `''`        | Sets the native HTML `cite` attribute — a URL identifying the source.    |
| class | `String`               | `''`        | Additional Tailwind classes applied to the `<blockquote>` element.       |

### FwbBlockquote Slots

| Name    | Description           |
| ------- | --------------------- |
| default | The quoted text body. |
