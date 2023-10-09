<template>
  <div class="flex flex-col gap-2">
    <fwb-toggle
      v-model="toggle"
      label="Toggle me"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbToggle } from '../../../../src/index'

const toggle = ref(false)
</script>
