<template>
  <div class="vp-raw">
    <fwb-p class="mb-2">
      Technology {{ picked }}
    </fwb-p>
    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <fwb-radio
          v-model="picked"
          label="Svelte"
          name="radio-horizontal"
          value="Svelte"
        />
      </li>
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <fwb-radio
          v-model="picked"
          label="Vue JS"
          name="radio-horizontal"
          value="Vue JS"
        />
      </li>
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <fwb-radio
          v-model="picked"
          label="React"
          name="radio-horizontal"
          value="React"
        />
      </li>
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <fwb-radio
          v-model="picked"
          label="Angular"
          name="radio-horizontal"
          value="Angular"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbP, FwbRadio } from '../../../../src/index'

const picked = ref('svelte')
</script>
