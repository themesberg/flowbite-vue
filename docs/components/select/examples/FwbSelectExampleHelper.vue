<template>
  <div class="vp-raw">
    <fwb-select
      v-model="selected"
      :options="countries"
      label="Select a country"
    >
      <template #helper>
        We'll never share your details. Read our
        <fwb-a
          href="#"
          color="text-blue-600 dark:text-blue-500"
        >
          Privacy Policy
        </fwb-a>.
      </template>
    </fwb-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbA, FwbSelect } from '../../../../src/index'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
