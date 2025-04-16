<template>
  <div class="vp-raw">
    <fwb-input
      v-model="name"
      label="Your name"
      placeholder="Success input"
      required
      validation-status="success"
    >
      <template #validationMessage>
        <span class="font-medium">Well done!</span> Some success message.
      </template>
    </fwb-input>
    <hr class="mt-4 border-0">
    <fwb-input
      v-model="name"
      label="Your name"
      placeholder="Error input"
      required
      validation-status="error"
    >
      <template #validationMessage>
        <span class="font-medium">Oh, snapp!</span> Some error message.
      </template>
    </fwb-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbInput } from '../../../../src/index'

const name = ref('')
</script>
