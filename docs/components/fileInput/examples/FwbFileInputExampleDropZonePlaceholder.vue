<template>
  <div class="vp-raw">
    <fwb-file-input
      v-model="file"
      dropzone
    >
      <template #dropzonePlaceholder>
        <span class="font-semibold">Choose your file</span>
        or drop it here
      </template>
    </fwb-file-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbFileInput } from '../../../../src/index'

const file = ref(null)
</script>
