<template>
  <div>
    <Select v-model="selected" :options="countries" placeholder="You can't select" label="Select a country" :disabled="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select } from '../../../../src/index'

let selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>