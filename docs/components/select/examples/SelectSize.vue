<template>
  <div class="flex flex-col gap-2 vp-raw">
    <fwb-select
      v-model="selected"
      :options="countries"
      label="Select a country"
      size="lg"
    />
    <fwb-select
      v-model="selected"
      :options="countries"
      label="Select a country"
      size="md"
    />
    <fwb-select
      v-model="selected"
      :options="countries"
      label="Select a country"
      size="sm"
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
