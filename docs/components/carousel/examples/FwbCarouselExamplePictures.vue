<template>
  <div class="vp-raw">
    <fwb-carousel :pictures="pictures" />
  </div>
</template>

<script setup>
import { FwbCarousel } from '../../../../src/index'

const pictures = [
  {
    alt: 'Picture 1',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg',
  },
  {
    alt: 'Picture 2',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
  },
  {
    alt: 'Picture 3',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
  },
  {
    alt: 'Picture 4',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
  },
  {
    alt: 'Picture 5',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
  },
]
</script>
