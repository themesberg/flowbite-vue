<template>
  <div class="vp-raw flex flex-col">
    <Carousel :pictures="pictures"></Carousel>
  </div>
</template>
<script setup>
import { Carousel } from '../../../../src/index'
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
 },
]
</script>
