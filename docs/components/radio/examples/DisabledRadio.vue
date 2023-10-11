<template>
  <div class="vp-raw">
    <fwb-radio
      v-model="picked"
      name="disabled-radio"
      value="one"
      label="Disabled radio"
      :disabled="true"
    />
    <fwb-radio
      v-model="picked"
      name="disabled-radio"
      value="two"
      label="Disabled checked"
      :disabled="true"
    />
  </div>
</template>

<script setup>
import { FwbRadio } from '../../../../src/index'
import { ref } from 'vue'

const picked = ref('one')
</script>
