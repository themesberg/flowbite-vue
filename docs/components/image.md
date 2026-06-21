<script setup>
import FwbImgExample from './typography/image/FwbImgExample.vue'
import FwbImgExampleCaption from './typography/image/FwbImgExampleCaption.vue'
import FwbImgExampleSize from './typography/image/FwbImgExampleSize.vue'
import FwbImgExampleAlign from './typography/image/FwbImgExampleAlign.vue'
import FwbImgExampleGrayscale from './typography/image/FwbImgExampleGrayscale.vue'
import FwbImgExampleCustom from './typography/image/FwbImgExampleCustom.vue'
</script>

# Images - Flowbite Vue

#### The image component can be used to embed images inside the web page in articles and sections based on multiple styles, sizes, layouts and hover animations

---

:::tip Images - Flowbite
Original reference: [https://flowbite.com/docs/typography/images/](https://flowbite.com/docs/typography/images/)
:::

The image component can be used to display responsive images with support for captions, custom sizes, alignment, grayscale filters, and hover effects — all styled with Tailwind CSS utility classes.

## Default Image

Use `FwbImg` to render a responsive image that won't grow beyond its original width. Provide `src` and `alt` for basic usage.

<fwb-img-example />

```vue
<template>
  <fwb-img
    alt="flowbite-vue"
    src="/images/examples/image.png"
  />
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>
```

## Image Caption

Use the `caption` prop to display a centered caption below the image, rendered inside a `<figcaption>` element. Use `captionClass` to override the caption styling.

<fwb-img-example-caption />

```vue
<template>
  <fwb-img
    alt="flowbite-vue"
    caption="flowbite-vue"
    src="/images/examples/image.png"
  />
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>
```

## Sizes

Use the `size` prop to apply a Tailwind max-width or width utility and constrain the image dimensions.

<fwb-img-example-size />

```vue
<template>
  <fwb-img
    alt="flowbite-vue"
    size="max-w-md"
    src="/images/examples/image.png"
  />
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>
```

## Alignment

Use the `alignment` prop to apply a Tailwind margin utility such as `mx-auto` (center) or `ml-auto` (right) to position the image horizontally.

<fwb-img-example-align />

```vue
<template>
  <fwb-img
    alignment="mx-auto"
    alt="flowbite-vue"
    size="max-w-md"
    src="/images/examples/image.png"
  />
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>
```

## Grayscale

Use `imgClass` to apply Tailwind filter utilities. The example below uses `grayscale` by default and removes it on hover.

<fwb-img-example-grayscale />

```vue
<template>
  <fwb-img
    alt="flowbite-vue"
    img-class="rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
    size="max-w-lg"
    src="/images/examples/image.png"
  />
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>
```

## Custom Classes

Use the `imgClass` prop to apply any Tailwind utility classes directly to the `<img>` element.

<fwb-img-example-custom />

```vue
<template>
  <fwb-img
    alt="flowbite-vue"
    img-class="rounded-lg border"
    size="max-w-lg"
    src="/images/examples/image.png"
  />
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>
```

## Image component API

### FwbImg Props

| Name         | Type     | Default                                                    | Description                                                                          |
| ------------ | -------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| alt          | `String` | `''`                                                       | Alt text for the image element.                                                      |
| alignment    | `String` | `''`                                                       | Tailwind margin utility for horizontal positioning (e.g. `mx-auto`, `ml-auto`).      |
| caption      | `String` | `''`                                                       | When set, wraps the image in a `<figure>` and renders a `<figcaption>`.              |
| captionClass | `String` | `'mt-2 text-sm text-center text-gray-500 dark:text-gray-400'` | Tailwind classes applied to the `<figcaption>` element.                          |
| imgClass     | `String` | `'h-auto'`                                                 | Additional Tailwind classes applied directly to the `<img>` element.                 |
| size         | `String` | `'max-w-full'`                                             | Tailwind size utility applied to both the image and the figure wrapper (if shown).   |
| src          | `String` | `''`                                                       | URL of the image to display.                                                         |
