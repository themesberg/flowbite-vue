<template>
  <div class="vp-raw">
    <fwb-range
      v-model="value"
      label="Min-max range"
      min="0"
      max="10"
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
