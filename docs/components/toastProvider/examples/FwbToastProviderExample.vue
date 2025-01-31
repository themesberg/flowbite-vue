<template>
  <fwb-toast-provider :transition="transition">
    <label
      class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
    >Select transition
    </label>
    <select
      v-model="transition"
      class="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    >
      <option value="slide-left">
        Slide left
      </option>
      <option value="slide-right">
        Slide right
      </option>
      <option value="slide-top">
        Slide top
      </option>
      <option value="slide-bottom">
        Slide bottom
      </option>
      <option value="fade">
        Fade
      </option>
    </select>
    <div class="vp-raw flex flex-col">
      <fwb-toast-provider-example-child />
    </div>
  </fwb-toast-provider>
</template>

<script lang="ts" setup>
import { FwbToastProvider } from '../../../../src/index'
import FwbToastProviderExampleChild from './FwbToastProviderExampleChild.vue'
import { ref } from 'vue'

const transition = ref('slide-left')
</script>
