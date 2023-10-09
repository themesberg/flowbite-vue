<template>
  <div class="flex flex-col gap-2">
    <select
      v-model="selected"
      :options="countries"
      label="Select a country"
      size="lg"
    />
    <select
      v-model="selected"
      :options="countries"
      label="Select a country"
      size="md"
    />
    <select
      v-model="selected"
      :options="countries"
      label="Select a country"
      size="sm"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select } from '../../../../src/index'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
