<template>
  <div class="vp-raw">
    <fwb-progress
      :progress="percentage"
      value-position="outside"
      show-value
      label="File Size Progress"
      color="green"
    >
      <template #value>
        {{ (loaded / 1024).toFixed(2) }} KB / {{ (total / 1024).toFixed(2) }} KB
      </template>
    </fwb-progress>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

import { FwbProgress } from '../../../../src/index'

const total = 5000
const loaded = ref(0)
const percentage = computed(() => Math.min(100, (loaded.value / total) * 100))

let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    loaded.value = loaded.value >= total ? 0 : loaded.value + total / 20
  }, 400)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
