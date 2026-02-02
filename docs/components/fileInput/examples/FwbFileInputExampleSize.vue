<template>
  <div class="gap-2 grid vp-raw">
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

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbFileInput } from '../../../../src/index'

const file = ref(null)
</script>
