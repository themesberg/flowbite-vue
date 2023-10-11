<template>
  <div class="vp-raw">
    <fwb-radio
      v-model="picked"
      value="first"
      name="with-link"
    >
      I agree with the
      <a
        href="/"
        class="text-primary-600 dark:text-primary-500 hover:underline ml-1"
      >
        terms and conditions
      </a>.
    </fwb-radio>
  </div>
</template>

<script setup>
import { FwbRadio } from '../../../../src/index'
import { ref } from 'vue'

const picked = ref('first')
</script>
