<template>
  <div class="vp-raw grid gap-4">
    <fwb-checkbox
      v-model="check1"
      label="Terms accepted (success)"
      validation-status="success"
    >
      <template #validationMessage>
        <span class="font-medium">Great!</span> You have accepted the terms.
      </template>
    </fwb-checkbox>
    <fwb-checkbox
      v-model="check2"
      label="Terms not accepted (error)"
      validation-status="error"
    >
      <template #validationMessage>
        <span class="font-medium">Required!</span> You must accept the terms to continue.
      </template>
    </fwb-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbCheckbox } from '../../../../src/index'

const check1 = ref(true)
const check2 = ref(false)
</script>
