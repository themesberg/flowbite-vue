<template>
  <div class="vp-raw">
    <fwb-progress
      :progress="percentage"
      value-position="outside"
      show-value
      label="Time Remaining"
      color="purple"
    >
      <template #value>
        {{ Math.round(percentage) }}% ({{ secondsRemaining }}s remaining)
      </template>
    </fwb-progress>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

import { FwbProgress } from '../../../../src/index'

const totalSeconds = 25
const secondsRemaining = ref(totalSeconds)
const percentage = computed(() => ((totalSeconds - secondsRemaining.value) / totalSeconds) * 100)

let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    secondsRemaining.value = secondsRemaining.value <= 0 ? totalSeconds : secondsRemaining.value - 1
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
