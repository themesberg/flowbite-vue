<template>
  <div class="vp-raw">
    <fwb-toggle
      v-model="toggle"
      disabled
      label="Can't Toggle me"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbToggle } from '../../../../src/index'

const toggle = ref(false)
</script>
