<template>
  <div class="flex flex-col gap-4 vp-raw">
    <fwb-file-input
      v-model="file"
      validation-status="error"
      label="Upload file"
    >
      <template #validationMessage>
        Please select a valid file.
      </template>
    </fwb-file-input>
    <fwb-file-input
      v-model="file"
      validation-status="success"
      label="Upload file"
    >
      <template #helper>
        File looks good!
      </template>
    </fwb-file-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbFileInput } from '../../../../src/index'

const file = ref(null)
</script>
