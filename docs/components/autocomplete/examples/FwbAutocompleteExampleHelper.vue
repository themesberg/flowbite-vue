<template>
  <div class="vp-raw">
    <fwb-autocomplete
      v-model="selected"
      :options="countries"
      :search-fields="['name']"
      display="name"
      label="Select a country"
      placeholder="Search countries..."
    >
      <template #helper>
        We'll never share your selection. Read our
        <a
          href="#"
          class="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >Privacy Policy</a>.
      </template>
    </fwb-autocomplete>
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
