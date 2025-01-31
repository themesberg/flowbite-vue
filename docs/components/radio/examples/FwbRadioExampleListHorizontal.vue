<template>
  <div class="vp-raw">
    <fwb-p class="mb-2">
      Technology {{ picked }}
    </fwb-p>
    <ul class="w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
      <li class="!m-0 flex w-full rounded-t-lg border-gray-200 pl-3 dark:border-gray-600">
        <fwb-radio
          v-model="picked"
          label="Svelte"
          name="radio-horizontal"
          value="Svelte"
        />
      </li>
      <li class="!m-0 flex w-full rounded-t-lg border-gray-200 pl-3 dark:border-gray-600">
        <fwb-radio
          v-model="picked"
          label="Vue JS"
          name="radio-horizontal"
          value="Vue JS"
        />
      </li>
      <li class="!m-0 flex w-full rounded-t-lg border-gray-200 pl-3 dark:border-gray-600">
        <fwb-radio
          v-model="picked"
          label="React"
          name="radio-horizontal"
          value="React"
        />
      </li>
      <li class="!m-0 flex w-full rounded-t-lg border-gray-200 pl-3 dark:border-gray-600">
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

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbP, FwbRadio } from '../../../../src/index'

const picked = ref('svelte')
</script>
