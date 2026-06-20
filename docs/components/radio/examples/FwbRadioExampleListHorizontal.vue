<template>
  <div class="vp-raw">
    <ul class="w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
      <li
        v-for="option in options"
        :key="option.value"
        class="m-0 flex w-full border-b border-gray-200 last:border-b-0 dark:border-gray-600 sm:border-b-0 sm:border-r sm:last:border-r-0"
      >
        <fwb-radio
          v-model="picked"
          :label="option.label"
          name="radio-horizontal"
          :value="option.value"
          wrapper-class="w-full py-2 pl-3"
        />
      </li>
    </ul>
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
      Selected: {{ picked }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbRadio } from '../../../../src/index'

const options = [
  { label: 'Angular', value: 'angular' },
  { label: 'React', value: 'react' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Vue JS', value: 'vue' },
]

const picked = ref('vue')
</script>
