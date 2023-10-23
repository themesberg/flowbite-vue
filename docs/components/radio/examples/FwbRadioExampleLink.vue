<template>
  <fwb-radio
    v-model="picked"
    name="with-link"
    value="first"
  >
    I agree with the
    <fwb-a
      class="ml-1"
      href="#"
    >
      terms and conditions
    </fwb-a>.
  </fwb-radio>
</template>

<script setup>
import { ref } from 'vue'
import { FwbA, FwbRadio } from '../../../../src/index'

const picked = ref()
</script>
