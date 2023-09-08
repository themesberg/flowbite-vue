<template>
  <div class="vp-raw">
    <Input v-model='email' required placeholder="enter your email address" label="Email" validation-status='success' />
    <hr class='mt-4 border-0'>
    <Input v-model='email' required placeholder="enter your email address" label="Email" validationStatus='error'>
      <template #validationMessage>
        Please enter a valid email address
      </template>
    </Input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Input } from '../../../../src/index'

const email = ref('')
</script>
