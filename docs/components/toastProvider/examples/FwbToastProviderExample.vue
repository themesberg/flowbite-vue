<template>
  <fwb-toast-provider :transition="transition">
    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >Select transition</label>
    <select
      id="countries"
      v-model="transition"
      class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
    <div class="vp-raw flex align-center gap-2 flex-wrap flex-col">
      <fwb-toast-provider-example-child />
    </div>
  </fwb-toast-provider>
</template>

<script setup>
import { FwbToastProvider } from '../../../../src/index'
import FwbToastProviderExampleChild from './FwbToastProviderExampleChild.vue'
import { ref } from 'vue'

const transition = ref('slide-left')
</script>
