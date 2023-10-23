<template>
  <div>
    <fwb-select
      v-model="selected"
      :options="countries"
      disabled
      label="Select a country"
      placeholder="You can't select"
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
