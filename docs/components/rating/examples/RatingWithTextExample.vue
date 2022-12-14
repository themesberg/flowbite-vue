<template>
  <div class="vp-raw flex flex-col">
    <Rating :rating="4">
      <template #besideText>
          <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
        </template>
    </Rating>
  </div>
</template>
<script setup>
import { Rating } from '../../../../src/index'
</script>
