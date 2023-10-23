<script setup>
import FwbImgExample from './typography/image/FwbImgExample.vue'
import FwbImgExampleCaption from './typography/image/FwbImgExampleCaption.vue'
import FwbImgExampleSize from './typography/image/FwbImgExampleSize.vue'
import FwbImgExampleAlign from './typography/image/FwbImgExampleAlign.vue'
import FwbImgExampleGrayscale from './typography/image/FwbImgExampleGrayscale.vue'
import FwbImgExampleCustom from './typography/image/FwbImgExampleCustom.vue'
</script>

# Vue Images - Flowbite

#### The image component can be used to embed images inside the web page in articles and sections based on multiple styles, sizes, layouts and hover animations

## Default image

Use this example to show the a responsive image that won’t grow beyond the maximum original width.

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
<fwb-img-example />

## Image caption

This example can be used to add a caption for the image often used inside articles. Use `caption-class` to override the cation.

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
<fwb-img-example-caption />


## Sizes

Set the size of the image using the `w-size` and `h-size` or `max-w-size` utility classes from Tailwind CSS to set the width and height of the element.

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
<fwb-img-example-size />

## Alignment

Align the image component to the center or right side of the document page using `mx-auto` and `ml-auto` margin styles.

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
<fwb-img-example-align />

## Grayscale

Use the filter option and apply a grayscale to the image element using the grayscale class.

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
<fwb-img-example-grayscale />

## Custom classes

Use the `img-class` prop to apply tailwind classes.

```vue
<template>
  <fwb-img
    alt="flowbite-vue"
    img-class="rounded-lg border-[1px]"
    size="max-w-lg"
    src="/images/examples/image.png"
  />
</template>

<script setup>
import { FwbImg } from 'flowbite-vue'
</script>
```
<fwb-img-example-custom />
