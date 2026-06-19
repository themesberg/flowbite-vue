<template>
  <div class="vp-raw">
    <fwb-toggle
      v-model="toggle"
      label="Enable feature"
      class="bg-amber-200 dark:bg-green-900 peer-checked:bg-amber-600 dark:peer-checked:bg-green-500 peer-focus:ring-amber-300 dark:peer-focus:ring-green-800"
      label-class="font-bold text-amber-900 dark:text-green-200"
      wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbToggle } from '../../../../src/index'

const toggle = ref(false)
</script>
