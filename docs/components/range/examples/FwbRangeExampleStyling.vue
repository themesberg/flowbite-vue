<template>
  <div class="vp-raw">
    <fwb-range
      v-model.number="value"
      label="Volume"
      class="bg-amber-200 dark:bg-green-900"
      label-class="text-xl font-bold text-amber-900 dark:text-green-200"
      wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3 [--fwb-range-thumb-color:var(--color-amber-600)] dark:[--fwb-range-thumb-color:var(--color-green-400)]"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbRange } from '../../../../src/index'

const value = ref(50)
</script>
