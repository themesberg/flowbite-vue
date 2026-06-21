<script setup>
import FwbCarouselExample from './carousel/examples/FwbCarouselExample.vue'
import FwbCarouselExampleSlide from './carousel/examples/FwbCarouselExampleSlide.vue'
import FwbCarouselExampleSlideInterval from './carousel/examples/FwbCarouselExampleSlideInterval.vue'
import FwbCarouselExampleWithoutControls from './carousel/examples/FwbCarouselExampleWithoutControls.vue'
import FwbCarouselExampleWithoutIndicators from './carousel/examples/FwbCarouselExampleWithoutIndicators.vue'
</script>

# Carousel - Flowbite Vue

#### Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options

---

:::tip Carousel - Flowbite
Original reference: [https://flowbite.com/docs/components/carousel/](https://flowbite.com/docs/components/carousel/)
:::

The carousel component can be used to cycle through a series of images or content slides with support for navigation controls, pagination indicators, and configurable auto-play intervals.

## Default Carousel

Pass an array of `{ src, alt }` objects to the `pictures` prop to render a carousel with previous/next controls and dot indicators.

<fwb-carousel-example />

```vue
<template>
  <fwb-carousel :pictures="pictures" />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  { src: '/images/img-1.svg', alt: 'Image 1' },
  { src: '/images/img-2.svg', alt: 'Image 2' },
  { src: '/images/img-3.svg', alt: 'Image 3' },
]
</script>
```

## Without Controls

Add the `no-controls` prop to hide the previous/next navigation buttons and let users rely on indicator dots or auto-play to change slides.

<fwb-carousel-example-without-controls />

```vue
<template>
  <fwb-carousel no-controls :pictures="pictures" />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  { src: '/images/img-1.svg', alt: 'Image 1' },
  { src: '/images/img-2.svg', alt: 'Image 2' },
  { src: '/images/img-3.svg', alt: 'Image 3' },
]
</script>
```

## Without Indicators

Add the `no-indicators` prop to hide the dot buttons at the bottom of the carousel.

<fwb-carousel-example-without-indicators />

```vue
<template>
  <fwb-carousel no-indicators :pictures="pictures" />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  { src: '/images/img-1.svg', alt: 'Image 1' },
  { src: '/images/img-2.svg', alt: 'Image 2' },
  { src: '/images/img-3.svg', alt: 'Image 3' },
]
</script>
```

## Auto-play

Add the `slide` prop to automatically advance through slides. The default interval is 3 seconds.

<fwb-carousel-example-slide />

```vue
<template>
  <fwb-carousel :pictures="pictures" slide />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  { src: '/images/img-1.svg', alt: 'Image 1' },
  { src: '/images/img-2.svg', alt: 'Image 2' },
  { src: '/images/img-3.svg', alt: 'Image 3' },
]
</script>
```

## Custom Interval

Use `slide-interval` together with `slide` to control how long each slide stays visible, in milliseconds.

<fwb-carousel-example-slide-interval />

```vue
<template>
  <fwb-carousel :pictures="pictures" slide :slide-interval="1000" />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  { src: '/images/img-1.svg', alt: 'Image 1' },
  { src: '/images/img-2.svg', alt: 'Image 2' },
  { src: '/images/img-3.svg', alt: 'Image 3' },
]
</script>
```

## Carousel component API

### FwbCarousel Props

| Name          | Type                              | Default | Description                                                       |
| ------------- | --------------------------------- | ------- | ----------------------------------------------------------------- |
| pictures      | `Array<{ src: string, alt?: string }>` | `[]`    | Array of image objects to display as slides.                 |
| noControls    | `Boolean`                         | `false` | Hides the previous and next navigation buttons.                   |
| noIndicators  | `Boolean`                         | `false` | Hides the dot indicator buttons at the bottom of the carousel.    |
| slide         | `Boolean`                         | `false` | Enables automatic slide advancement on mount.                     |
| slideInterval | `Number`                          | `3000`  | Duration in milliseconds between auto-play slide transitions.     |
| animation     | `Boolean`                         | `false` | Reserved for future slide transition animation (currently has no effect). |
