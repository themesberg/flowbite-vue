<template>
  <div class="vp-raw">
    <fwb-file-input
      v-model="file"
      label="Upload file"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from '../../../../src/index'

const file = ref(null)
</script>
