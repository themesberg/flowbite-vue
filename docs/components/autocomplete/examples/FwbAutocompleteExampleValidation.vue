<template>
  <div class="vp-raw">
    <fwb-autocomplete
      v-model="selected1"
      :options="countries"
      :search-fields="['name']"
      display="name"
      label="Select a country"
      placeholder="Search countries..."
      validation-status="success"
    >
      <template #validationMessage>
        <span class="font-medium">Well done!</span> Your selection looks good.
      </template>
    </fwb-autocomplete>
    <hr class="mt-4 border-0">
    <fwb-autocomplete
      v-model="selected2"
      :options="countries"
      :search-fields="['name']"
      display="name"
      label="Select a country"
      placeholder="Search countries..."
      validation-message="Oh, snap! Please select a country."
      validation-status="error"
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
]

const selected1 = ref<typeof countries[0] | null>(null)
const selected2 = ref<typeof countries[0] | null>(null)
</script>
