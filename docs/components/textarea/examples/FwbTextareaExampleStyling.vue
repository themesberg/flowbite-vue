<template>
  <div class="vp-raw">
    <fwb-textarea
      v-model="message"
      label="Your story"
      placeholder="Start typing something..."
      class="bg-amber-100 dark:bg-green-900 border-2 border-amber-500 has-[textarea:focus]:border-amber-900 dark:border-green-600 dark:has-[textarea:focus]:border-green-400 has-[textarea:focus]:ring-amber-300 dark:has-[textarea:focus]:ring-green-800"
      label-class="text-xl font-bold text-amber-900 dark:text-green-200"
      :rows="3"
      textarea-class="text-amber-900 dark:text-green-100 placeholder:text-amber-500 dark:placeholder:text-green-500"
      wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbTextarea } from '../../../../src/index'

const message = ref('')
</script>
