<template>
  <div class="gap-2 grid vp-raw">
    <fwb-autocomplete
      v-model="selected1"
      :options="countries"
      :search-fields="['name']"
      display="name"
      label="Small"
      placeholder="Small autocomplete..."
      size="sm"
    />
    <fwb-autocomplete
      v-model="selected2"
      :options="countries"
      :search-fields="['name']"
      display="name"
      label="Medium (default)"
      placeholder="Medium autocomplete..."
      size="md"
    />
    <fwb-autocomplete
      v-model="selected3"
      :options="countries"
      :search-fields="['name']"
      display="name"
      label="Large"
      placeholder="Large autocomplete..."
      size="lg"
    />
    <fwb-autocomplete
      v-model="selected4"
      :options="countries"
      :search-fields="['name']"
      display="name"
      label="Extra Large"
      placeholder="Extra Large autocomplete..."
      size="xl"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbAutocomplete } from '../../../../src/index'

const countries = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'France', code: 'FR' },
  { id: 4, name: 'Germany', code: 'DE' },
  { id: 5, name: 'United Kingdom', code: 'UK' },
]

const selected1 = ref<typeof countries[0] | null>(null)
const selected2 = ref<typeof countries[0] | null>(null)
const selected3 = ref<typeof countries[0] | null>(null)
const selected4 = ref<typeof countries[0] | null>(null)
</script>
