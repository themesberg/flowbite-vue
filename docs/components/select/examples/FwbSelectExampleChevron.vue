<template>
  <div class="vp-raw">
    <fwb-select
      v-model="selected"
      :options="countries"
      label="Select a country"
    >
      <template #chevron>
        <svg
          aria-hidden="true"
          class="size-4 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12 2a1 1 0 0 1 .707.293l4 4a1 1 0 0 1-1.414 1.414L12 4.414 8.707 7.707a1 1 0 0 1-1.414-1.414l4-4A1 1 0 0 1 12 2Zm-4.707 9.293a1 1 0 0 1 1.414 0L12 14.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
            fill-rule="evenodd"
          />
        </svg>
      </template>
    </fwb-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbSelect } from '../../../../src/index'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
