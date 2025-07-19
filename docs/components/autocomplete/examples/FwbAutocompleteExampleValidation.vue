<template>
  <div class="vp-raw">
    <fwb-autocomplete
      v-model="selectedCountry"
      :options="countries"
      :search-fields="['name']"
      display="name"
      label="Country *"
      placeholder="Select a country..."
      :validation-status="validationStatus"
    >
      <template #validationMessage>
        <span v-if="!selectedCountry">Please select a country</span>
        <span v-else-if="showValidation">This field is required for shipping</span>
      </template>
      <template #helper>
        Choose the country where you reside
      </template>
    </fwb-autocomplete>

    <div
      v-if="selectedCountry"
      class="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg"
    >
      <p class="text-sm text-green-700">
        ✓ Selected: {{ selectedCountry.name }} ({{ selectedCountry.code }})
      </p>
    </div>

    <button
      v-if="selectedCountry"
      class="mt-2 px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
      @click="toggleValidationMessage"
    >
      {{ showValidation ? 'Hide' : 'Show' }} persistent validation
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import { FwbAutocomplete } from '../../../../src/index'

const countries = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'France', code: 'FR' },
  { id: 4, name: 'Germany', code: 'DE' },
  { id: 5, name: 'United Kingdom', code: 'UK' },
]

const selectedCountry = ref<typeof countries[0] | null>(null)
const showValidation = ref(false)

const validationStatus = computed(() => {
  return selectedCountry.value ? 'success' : 'error'
})

const toggleValidationMessage = () => {
  showValidation.value = !showValidation.value
}
</script>
