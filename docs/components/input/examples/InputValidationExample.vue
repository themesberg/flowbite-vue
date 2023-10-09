<template>
  <div class="vp-raw">
    <input
      v-model="email"
      required
      placeholder="enter your email address"
      label="Email"
      validation-status="success"
    >
    <hr class="mt-4 border-0">
    <input
      v-model="email"
      required
      placeholder="enter your email address"
      label="Email"
      validation-status="error"
    >
    <template #validationMessage>
      Please enter a valid email address
    </template>
    </input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Input } from '../../../../src/index'

const email = ref('')
</script>
