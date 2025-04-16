<template>
  <div class="vp-raw">
    <fwb-input
      v-model="name"
      class="p-2 border border-gray-900 rounded-none"
      input-class="p-0 text-center text-gray-700 dark:text-gray-200"
      label-class="text-center p-2 m-0 text-gray-900 dark:text-gray-200 italic"
      label="First name"
      placeholder="enter your first name"
      wrapper-class="bg-gray-100 dark:bg-gray-800"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbInput } from '../../../../src/index'

const name = ref('')
</script>
