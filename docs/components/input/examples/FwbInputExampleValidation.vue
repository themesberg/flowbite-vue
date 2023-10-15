<template>
  <div class="vp-raw">
    <fwb-input
      v-model="email"
      required
      placeholder="enter your email address"
      label="Email"
      validation-status="success"
    />
    <hr class="mt-4 border-0">
    <fwb-input
      v-model="email"
      required
      placeholder="enter your email address"
      label="Email"
      validation-status="error"
    >
      <template #validationMessage>
        Please enter a valid email address
      </template>
    </fwb-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from '../../../../src/index'

const email = ref('')
</script>
