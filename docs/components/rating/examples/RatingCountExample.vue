<template>
  <div class="vp-raw flex flex-col">
    <Rating
    rating=1
    scale=1
    review-text="73 reviews"
    review-link="#"
    >
      <template #besideText>
        <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
      </template>
      
    </Rating>
  </div>
</template>
<script setup>
import { Rating } from '../../../../src/index'
</script>
