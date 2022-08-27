<script setup>
import CarouselDefaultExample from './examples/CarouselDefaultExample.vue';
import CarouselNoControlsExample from './examples/CarouselNoControlsExample.vue';
import CarouselNoIndicatorsExample from './examples/CarouselNoIndicatorsExample.vue';
import CarouselSlideExample from './examples/CarouselSlideExample.vue';
import CarouselSlideIntervalExample from './examples/CarouselSlideIntervalExample.vue';
import CarouselPicturesExample from './examples/CarouselPicturesExample.vue';
</script>
# Carousel

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
    'src': 'https://i.picsum.photos/id/221/1920/1080.jpg?grayscale&hmac=GWPBzHGEhEh-BrPn1i-PuximCxLtUpKHcNwyACiTRHk',
    'alt': 'Picture 1',
  },
  {
    'src': 'https://i.picsum.photos/id/608/1920/1080.jpg?grayscale&hmac=kkVc8-M3ovbO-sFr02WmRbrHx5YcfWmOtkP8rNF9fO4',
    'alt': 'Picture 2',
  },
  {
    'src': 'https://i.picsum.photos/id/1012/1920/1080.jpg?grayscale&hmac=Zy9JmZ_sl88DXTF502k_0QqaeCyqjhkn60DjyE5F8Eo',
    'alt': 'Picture 3',
  },
  {
    'src': 'https://i.picsum.photos/id/1004/1920/1080.jpg?grayscale&hmac=48C-T9K-36l8jpzJntPTu40OiDuXflIlG_YB-lQWYZI',
    'alt': 'Picture 4',
  },
  {
    'src': 'https://i.picsum.photos/id/244/1920/1080.jpg?grayscale&hmac=lLcfHciI-EqaOIHGB_Gab7OpUjVSmDLw6GOq6B5THak',
    'alt': 'Picture 5',
  },]
</script>
<template>
  <Carousel :pictures="pictures"></Carousel>
</template>
```