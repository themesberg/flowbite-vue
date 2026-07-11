<template>
  <div class="vp-raw">
    <fwb-select
      v-model="selected"
      :options="countries"
      label="Select a country"
      validation-status="success"
    >
      <template #validationMessage>
        <span class="font-medium">Well done!</span> Your selection looks good.
      </template>
    </fwb-select>
    <hr class="mt-4 border-0">
    <fwb-select
      v-model="selected"
      :options="countries"
      label="Select a country"
      validation-message="Oh, snap! Please select a country."
      validation-status="error"
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
