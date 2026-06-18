<template>
  <div class="vp-raw">
    <fwb-select
      v-model="selected"
      :options="countries"
      class="border-2 border-gray-900 dark:border-gray-200 rounded-none"
      label="Select a country"
      label-class="italic text-gray-900 dark:text-gray-200"
      wrapper-class="bg-gray-100 dark:bg-gray-800 p-4"
    />
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
