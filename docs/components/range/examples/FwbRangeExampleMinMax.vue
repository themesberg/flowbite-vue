<template>
  <div class="vp-raw">
    <fwb-range
      v-model.number="value"
      :max="15"
      :min="5"
      label="Min-max range"
    />
    <pre>Selected value: {{ value }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRange } from '../../../../src/index'

const value = ref(10)
</script>
