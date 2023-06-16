<template>
  <div class="flex flex-col gap-2">
    <Select v-model="selected" :options="countries" label="Select a country" size="lg" />
    <Select v-model="selected" :options="countries" label="Select a country" size="md" />
    <Select v-model="selected" :options="countries" label="Select a country" size="sm" />
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