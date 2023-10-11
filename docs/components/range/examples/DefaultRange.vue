<template>
  <div class="vp-raw">
    <fwb-range v-model="value" />
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
