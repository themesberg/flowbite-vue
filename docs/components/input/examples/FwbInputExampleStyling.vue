<template>
  <div class="vp-raw">
    <fwb-input
      v-model="name"
      class="bg-amber-100 dark:bg-green-900 border-2 border-amber-500 has-[input:focus]:border-amber-900 dark:border-green-600 dark:has-[input:focus]:border-green-400 has-[input:focus]:ring-amber-300 dark:has-[input:focus]:ring-green-800"
      input-class="text-amber-900 dark:text-green-100 placeholder:text-amber-500 dark:placeholder:text-green-500"
      label-class="text-xl font-bold text-amber-900 dark:text-green-200"
      label="First name"
      placeholder="enter your first name"
      prefix-class="bg-amber-200 dark:bg-green-800 border-amber-500 dark:border-green-600 text-amber-700 dark:text-green-300"
      suffix-class="bg-amber-200 dark:bg-green-800 border-amber-500 dark:border-green-600 text-amber-700 dark:text-green-300"
      wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
    >
      <template #prefix>
        ↣
      </template>
      <template #suffix>
        ↢
      </template>
    </fwb-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbInput } from '../../../../src/index'

const name = ref('')
</script>
