<script setup>
import FwbCarouselExample from './carousel/examples/FwbCarouselExample.vue'
import FwbCarouselExamplePictures from './carousel/examples/FwbCarouselExamplePictures.vue'
import FwbCarouselExampleSlide from './carousel/examples/FwbCarouselExampleSlide.vue'
import FwbCarouselExampleSlideInterval from './carousel/examples/FwbCarouselExampleSlideInterval.vue'
import FwbCarouselExampleWithoutControls from './carousel/examples/FwbCarouselExampleWithoutControls.vue'
import FwbCarouselExampleWithoutIndicators from './carousel/examples/FwbCarouselExampleWithoutIndicators.vue'
</script>
# Vue Carousel - Flowbite

Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options

## Basic Carousel

<fwb-carousel-example />
```vue
<template>
  <fwb-carousel :pictures="pictures" />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  {src: '/images/img-1.svg', alt: 'Image 1'},
  {src: '/images/img-2.svg', alt: 'Image 2'},
  {src: '/images/img-3.svg', alt: 'Image 3'},
]
</script>
```


## Carousel without controls

<fwb-carousel-example-without-controls />
```vue
<template>
  <fwb-carousel no-controls :pictures="pictures" />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  {src: '/images/img-1.svg', alt: 'Image 1'},
  {src: '/images/img-2.svg', alt: 'Image 2'},
  {src: '/images/img-3.svg', alt: 'Image 3'},
]
</script>
```
## Carousel without indicators

<fwb-carousel-example-without-indicators />
```vue
<template>
  <fwb-carousel no-indicators :pictures="pictures" />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  {src: '/images/img-1.svg', alt: 'Image 1'},
  {src: '/images/img-2.svg', alt: 'Image 2'},
  {src: '/images/img-3.svg', alt: 'Image 3'},
]
</script>
```

## Carousel with slide animation

<fwb-carousel-example-slide />
```vue
<template>
  <fwb-carousel :pictures="pictures" slide />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  {src: '/images/img-1.svg', alt: 'Image 1'},
  {src: '/images/img-2.svg', alt: 'Image 2'},
  {src: '/images/img-3.svg', alt: 'Image 3'},
]
</script>
```

## Carousel with slide and custom interval

<fwb-carousel-example-slide-interval />

```vue
<template>
  <fwb-carousel :pictures="pictures" slide :slide-interval="1000"/>
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  {src: '/images/img-1.svg', alt: 'Image 1'},
  {src: '/images/img-2.svg', alt: 'Image 2'},
  {src: '/images/img-3.svg', alt: 'Image 3'},
]
</script>
```

## Carousel API

### Props

| Name          | Type    | Values                         | Default |
|---------------|---------|--------------------------------|---------|
| animation     | Boolean | `true`, `false`                | `false` |
| noControls    | Boolean | `true`, `false`                | `false` |
| noIndicators  | Boolean | `true`, `false`                | `false` |
| pictures      | Array   | `[{source: '', alt: ''}, ...]` | `[]`    |
| slide         | Boolean | `true`, `false`                | `false` |
| slideInterval | Number  |                                | `3000`  |
