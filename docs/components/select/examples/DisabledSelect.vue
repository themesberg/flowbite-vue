<template>
  <div class="vp-raw">
    <fwb-select
      v-model="selected"
      :options="countries"
      placeholder="You can't select"
      label="Select a country"
      :disabled="true"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbSelect } from '../../../../src/index'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
