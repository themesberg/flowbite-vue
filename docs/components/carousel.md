<script setup>
import CarouselDefaultExample from './carousel/examples/CarouselDefaultExample.vue';
import CarouselNoControlsExample from './carousel/examples/CarouselNoControlsExample.vue';
import CarouselNoIndicatorsExample from './carousel/examples/CarouselNoIndicatorsExample.vue';
import CarouselSlideExample from './carousel/examples/CarouselSlideExample.vue';
import CarouselSlideIntervalExample from './carousel/examples/CarouselSlideIntervalExample.vue';
import CarouselPicturesExample from './carousel/examples/CarouselPicturesExample.vue';
</script>
# Vue Carousel Component - Flowbite

Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options

## Default slider

```vue
<script setup>
import { Carousel } from 'flowbite-vue'
</script>
<template>
  <Carousel></Carousel>
</template>
```

<CarouselDefaultExample />

## Prop - controls

```typescript
const props = defineProps({
    controls: {
    type: Boolean,
    default: true,
    },
})
```

<CarouselNoControlsExample />

```vue
<script setup>
import { Carousel } from 'flowbite-vue'
</script>
<template>
  <Carousel :controls="false"></Carousel>
</template>
```
## Prop - indicators

```typescript
const props = defineProps({
    indicators: {
        type: Boolean,
        default: true,
    },
})
```

<CarouselNoIndicatorsExample />

```vue
<script setup>
import { Carousel } from 'flowbite-vue'
</script>
<template>
  <Carousel :indicators="false"></Carousel>
</template>
```

## Prop - slide

```typescript
const props = defineProps({
    slide: {
        type: Boolean,
        default: false,
    },
})
```

<CarouselSlideExample />

```vue
<script setup>
import { Carousel } from 'flowbite-vue'
</script>
<template>
  <Carousel :slide="true"></Carousel>
</template>
```

## Prop - slide interval

```typescript
const props = defineProps({
    slideInterval: {
        type: Number,
        default: 3000,
    },
})
```

<CarouselSlideIntervalExample />

```vue
<script setup>
import { Carousel } from 'flowbite-vue'
</script>
<template>
  <Carousel :slide="true" :slide-interval="1000"></Carousel>
</template>
```

## Prop - pictures

```typescript
const props = defineProps({
    pictures: {
        type: Array,
        default() {
            return [
                {
                    'src': 'https://flowbite.com/docs/images/carousel/carousel-1.svg',
                    'alt': 'Picture 1',
                },
                {
                    'src': 'https://flowbite.com/docs/images/carousel/carousel-2.svg',
                    'alt': 'Picture 2',
                },
                {
                    'src': 'https://flowbite.com/docs/images/carousel/carousel-3.svg',
                    'alt': 'Picture 3',
                },
            ]
        },
    },
})
```

<CarouselPicturesExample />

```vue
<script setup>
import { Carousel } from 'flowbite-vue'
const pictures = [
  {
    'src': 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg',
    'alt': 'Picture 1',
  },
  {
    'src': 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'alt': 'Picture 2',
  },
  {
    'src': 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'alt': 'Picture 3',
  },
  {
    'src': 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'alt': 'Picture 4',
  },
  {
    'src': 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    'alt': 'Picture 5',
  },
]
</script>
<template>
  <Carousel :pictures="pictures"></Carousel>
</template>
```
