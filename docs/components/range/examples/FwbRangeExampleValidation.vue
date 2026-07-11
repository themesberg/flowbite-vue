<template>
  <div class="flex flex-col gap-4 vp-raw">
    <fwb-range
      v-model.number="value"
      label="Volume (success)"
      validation-status="success"
    >
      <template #validationMessage>
        <span class="font-medium">Looks good!</span> Volume is set correctly.
      </template>
    </fwb-range>
    <fwb-range
      v-model.number="value"
      label="Volume (error)"
      validation-message="Too loud! Please lower the volume."
      validation-status="error"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbRange } from '../../../../src/index'

const value = ref(50)
</script>
