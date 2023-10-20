<template>
  <div class="vp-raw">
    <fwb-range
      v-model.number="value"
      disabled
      label="Disabled range"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRange } from '../../../../src/index'

const value = ref(10)
</script>
