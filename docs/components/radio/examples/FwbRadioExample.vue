<template>
  <div class="vp-raw">
    <fwb-radio
      v-model="picked"
      label="Radio 1"
      name="radio"
      value="one"
    />
    <fwb-radio
      v-model="picked"
      label="Radio 2"
      name="radio"
      value="two"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio } from '../../../../src/index'

const picked = ref()
</script>
