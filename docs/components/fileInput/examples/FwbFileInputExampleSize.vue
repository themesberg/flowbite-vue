<template>
  <div class="vp-raw grid gap-2">
    <fwb-file-input
      v-model="file"
      size="xs"
      label="Small size"
    />
    <fwb-file-input
      v-model="file"
      size="sm"
      label="Default size"
    />
    <fwb-file-input
      v-model="file"
      size="lg"
      label="Large size"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from '../../../../src/index'

const file = ref(null)
</script>
