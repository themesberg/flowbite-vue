<template>
  <div class="vp-raw">
    <fwb-autocomplete
      v-model="selected"
      :options="countries"
      :search-fields="['name']"
      class="bg-amber-100 dark:bg-green-900 border-2 border-amber-500 has-[input:focus]:border-amber-900 dark:border-green-600 dark:has-[input:focus]:border-green-400 has-[input:focus]:ring-amber-300 dark:has-[input:focus]:ring-green-800"
      display="name"
      dropdown-class="border-amber-300 dark:border-green-700"
      input-class="text-amber-900 dark:text-green-100 placeholder:text-amber-500 dark:placeholder:text-green-500"
      label="Select a country"
      label-class="text-xl font-bold text-amber-900 dark:text-green-200"
      placeholder="Search countries..."
      wrapper-class="bg-amber-300 dark:bg-green-800 border-2 border-amber-700 dark:border-green-400 rounded-lg p-3"
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

const selected = ref<typeof countries[0] | null>(null)
</script>
