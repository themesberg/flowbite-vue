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
      <template #suffix>
        <svg
          aria-hidden="true"
          class="size-5 opacity-40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
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
