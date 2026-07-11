<template>
  <div class="vp-raw flex flex-col gap-4">
    <fwb-progress
      :progress="progress"
      value-position="outside"
      show-value
      label="Basic Percentage"
    >
      <template #value="{ progress: value }">
        {{ value.toFixed(1) }}%
      </template>
    </fwb-progress>
    <fwb-progress
      :progress="progress"
      value-position="inside"
      show-value
      size="lg"
      label="Same value, shown inside the bar"
    >
      <template #value="{ progress: value }">
        {{ value.toFixed(1) }}%
      </template>
    </fwb-progress>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

import { FwbProgress } from '../../../../src/index'

const progress = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    progress.value = progress.value >= 100 ? 0 : Math.min(100, progress.value + 4.5)
  }, 400)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
