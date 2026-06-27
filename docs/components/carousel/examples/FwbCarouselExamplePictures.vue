<template>
  <div class="vp-raw">
    <fwb-carousel :pictures="pictures" />
  </div>
</template>

<script lang="ts" setup>
import { FwbCarousel } from '../../../../src/index'

const pictures = [
  {
    alt: 'Picture 1',
    src: '/assets/gallery/featured/image.jpg',
  },
  {
    alt: 'Picture 2',
    src: '/assets/gallery/square/image-1.jpg',
  },
  {
    alt: 'Picture 3',
    src: '/assets/gallery/square/image-2.jpg',
  },
  {
    alt: 'Picture 4',
    src: '/assets/gallery/square/image-3.jpg',
  },
  {
    alt: 'Picture 5',
    src: '/assets/gallery/square/image-5.jpg',
  },
]
</script>
