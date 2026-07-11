<template>
  <div class="flex flex-col gap-4 vp-raw">
    <fwb-file-input
      v-model="file"
      validation-status="error"
      validation-message="Please select a valid file."
      label="Upload file"
    />
    <fwb-file-input
      v-model="file"
      validation-status="success"
      label="Upload file"
    >
      <template #validationMessage>
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
