<template>
  <div class="vp-raw">
    <fwb-autocomplete
      v-model="selectedCountry"
      :options="countries"
      :search-fields="['name']"
      display="name"
      label="Select a country"
      placeholder="Search countries..."
    />
    <p
      v-if="selectedCountry"
      class="mt-2 text-sm text-gray-600"
    >
      Selected: {{ selectedCountry.name }} ({{ selectedCountry.code }})
    </p>
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
  { id: 6, name: 'Spain', code: 'ES' },
  { id: 7, name: 'Italy', code: 'IT' },
  { id: 8, name: 'Netherlands', code: 'NL' },
]

const selectedCountry = ref<typeof countries[0] | null>(null)
</script>
