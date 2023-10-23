<template>
  <div class="vp-raw">
    <fwb-checkbox
      v-model="check"
      label="Checked checkbox"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbCheckbox } from '../../../../src/index'

const check = ref(true)
</script>
