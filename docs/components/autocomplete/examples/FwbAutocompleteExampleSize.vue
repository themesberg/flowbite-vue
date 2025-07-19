<template>
  <div class="vp-raw">
    <div class="space-y-4">
      <fwb-autocomplete
        v-model="selected1"
        :options="countries"
        :search-fields="['name']"
        display="name"
        label="Small"
        size="sm"
        placeholder="Small autocomplete..."
      />

      <fwb-autocomplete
        v-model="selected2"
        :options="countries"
        :search-fields="['name']"
        display="name"
        label="Medium (default)"
        size="md"
        placeholder="Medium autocomplete..."
      />

      <fwb-autocomplete
        v-model="selected3"
        :options="countries"
        :search-fields="['name']"
        display="name"
        label="Large"
        size="lg"
        placeholder="Large autocomplete..."
      />
    </div>
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
</script>
