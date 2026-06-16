<template>
  <div class="vp-raw">
    <fwb-file-input
      v-model="file"
      label="Your portrait"
      wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
      label-class="text-xl font-bold text-amber-900 dark:text-green-200"
      class="bg-amber-100 hover:file:bg-amber-600 dark:bg-green-900 dark:hover:file:bg-green-500 dark:file:bg-green-700 file:bg-amber-400 border-2 border-amber-500 focus:border-amber-900 dark:border-green-600 dark:focus:border-green-400 dark:file:border-green-600 file:border-amber-500 focus:ring-amber-300 dark:focus:ring-green-800 dark:file:text-green-100 file:text-amber-900"
      :class="file
        ? 'text-amber-900 dark:text-green-100'
        : 'text-amber-500 dark:text-green-500'"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbFileInput } from '../../../../src/index'

const file = ref(null)
</script>
