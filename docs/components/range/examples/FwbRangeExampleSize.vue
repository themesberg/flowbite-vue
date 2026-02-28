<template>
  <div class="gap-3 grid vp-raw">
    <fwb-range
      v-model.number="value"
      label="Small"
      size="sm"
    />
    <fwb-range
      v-model.number="value"
      label="Medium"
      size="md"
    />
    <fwb-range
      v-model.number="value"
      label="Large"
      size="lg"
    />
    <fwb-range
      v-model.number="value"
      label="Extra Large"
      size="xl"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbRange } from '../../../../src/index'

const value = ref(50)
</script>
