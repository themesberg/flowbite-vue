<template>
  <div class="flex flex-col gap-3 vp-raw">
    <fwb-range
      v-model="value"
      label="Small range"
      size="sm"
    />
    <fwb-range
      v-model="value"
      label="Medium range"
      size="md"
    />
    <fwb-range
      v-model="value"
      label="Large range"
      size="lg"
    />
    <div class="mt-2">
      Value: {{ value }}
    </div>
  </div>
</template>

<script setup>
import { FwbRange } from '../../../../src/index'
import { ref } from 'vue'

const value = ref('10')
</script>
