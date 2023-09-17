<script setup>
import Img from './typography/image/Img.vue'
import ImgCap from './typography/image/ImgCap.vue'
import ImgSize from './typography/image/ImgSize.vue'
import ImgAlign from './typography/image/ImgAlign.vue'
import ImgBlur from './typography/image/ImgBlur.vue'
import ImgCustom from './typography/image/ImgCustom.vue'
</script>

# Vue Images - Flowbite

#### The image component can be used to embed images inside the web page in articles and sections based on multiple styles, sizes, layouts and hover animations

## Default image

Use this example to show the a responsive image that won’t grow beyond the maximum original width.

```vue
<template>
  <Img src="https://flowbite-svelte.com/images/examples/content-gallery-3.png" alt="flowbite-vue" />
</template>

<script setup>
import Img from 'flowbite-vue'
</script>
```

<Img />

## Image caption

This example can be used to add a caption for the image often used inside articles. Use `caption-class` to override the cation.

```vue
<template>
  <Img caption="flowbite-vue" src="https://flowbite-svelte.com/images/examples/content-gallery-3.png" alt="flowbite-vue" />
</template>

<script setup>
import Img from 'flowbite-vue'
</script>
```

<ImgCap />

## Sizes

Set the size of the image using the `w-size` and `h-size` or `max-w-size` utility classes from Tailwind CSS to set the width and height of the element.

```vue
<template>
  <Img size="max-w-md" src="https://flowbite-svelte.com/images/examples/content-gallery-3.png" alt="flowbite-vue" />
</template>

<script setup>
import Img from 'flowbite-vue'
</script>
```

<ImgSize />

## Alignment

Align the image component to the center or right side of the document page using `mx-auto` and `ml-auto` margin styles.

```vue
<template>
  <Img align="ml-auto" size="max-w-md" src="https://flowbite-svelte.com/images/examples/content-gallery-3.png" alt="flowbite-vue" />
</template>

<script setup>
import Img from 'flowbite-vue'
</script>
```

<ImgAlign />

## Grayscale

Use the filter option and apply a grayscale to the image element using the grayscale class.

```vue
<template>
  <Img
    size="max-w-lg"
    alt="My gallery"
    img-class="rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
    src="https://flowbite-svelte.com/images/examples/content-gallery-3.png"
  />
</template>

<script setup>
import Img from 'flowbite-vue'
</script>
```

<ImgBlur />

## Custom classes

Use the `img-class` prop to apply tailwind classes.

```vue
<template>
  <Img img-class="rounded-lg border-[1px]" size="max-w-lg" src="https://flowbite-svelte.com/images/examples/content-gallery-3.png" alt="flowbite-vue" />
</template>

<script setup>
import Img from 'flowbite-vue'
</script>
```

<ImgCustom />
