<template>
  <div class="vp-raw">
    <fwb-radio
      v-model="picked"
      disabled
      label="Disabled radio"
      name="radio-disabled"
      value="one"
    />
    <fwb-radio
      v-model="picked"
      disabled
      label="Disabled checked"
      name="radio-disabled"
      value="two"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio } from '../../../../src/index'

const picked = ref('two')
</script>
