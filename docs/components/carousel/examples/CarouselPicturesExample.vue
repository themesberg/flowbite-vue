<template>
  <div class="vp-raw flex flex-col">
    <Carousel :pictures="pictures"></Carousel>
  </div>
</template>
<script setup>
import { Carousel } from '../../../../src/index'
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
