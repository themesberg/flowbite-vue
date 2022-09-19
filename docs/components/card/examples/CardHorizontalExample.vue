<template>
  <div class="vp-raw inline-flex align-center gap-2 flex-wrap">
    <Card :href="'#'" :variant="'horizontal'" :imgSrc="'https://flowbite.com/docs/images/blog/image-4.jpg'" :imgAlt="'Desk'">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </Card>
  </div>
</template>
<script setup>
import { Card } from '../../../../src/index'
</script>