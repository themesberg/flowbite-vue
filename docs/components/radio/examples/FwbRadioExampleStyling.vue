<template>
  <div class="vp-raw">
    <fwb-radio-group
      name="styled"
      label="Custom styled group"
      wrapper-class="bg-amber-300 dark:bg-green-800 p-3 pt-2 border-2 border-amber-700 dark:border-green-400 rounded-lg"
      legend-class="mb-0 px-2 font-bold text-amber-900 dark:text-green-200"
    >
      <fwb-radio
        v-model="picked"
        label="Option A"
        value="a"
        class="focus:ring-amber-500 dark:focus:ring-green-400 text-amber-600 dark:text-green-500"
        label-class="text-amber-900 dark:text-green-200"
      />
      <fwb-radio
        v-model="picked"
        label="Option B"
        value="b"
        class="focus:ring-amber-500 dark:focus:ring-green-400 text-amber-600 dark:text-green-500"
        label-class="text-amber-900 dark:text-green-200"
      />
    </fwb-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbRadio, FwbRadioGroup } from '../../../../src/index'

const picked = ref('a')
</script>
