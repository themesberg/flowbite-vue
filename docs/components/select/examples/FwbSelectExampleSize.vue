<template>
  <div class="gap-2 grid vp-raw">
    <fwb-select
      v-model="selected"
      :options="countries"
      label="Small"
      size="sm"
    />
    <fwb-select
      v-model="selected"
      :options="countries"
      label="Medium (default)"
      size="md"
    />
    <fwb-select
      v-model="selected"
      :options="countries"
      label="Large"
      size="lg"
    />
    <fwb-select
      v-model="selected"
      :options="countries"
      label="Extra Large"
      size="xl"
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
