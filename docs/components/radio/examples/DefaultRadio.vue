<template>
  <div class="vp-raw">
    <fwb-radio
      v-model="picked"
      name="default radio"
      value="one"
      label="Default radio"
    />
    <fwb-radio
      v-model="picked"
      name="default radio"
      value="two"
      label="Checked state"
    />
  </div>
</template>

<script setup>
import { FwbRadio } from '../../../../src/index'
import { ref } from 'vue'

const picked = ref('one')
</script>
