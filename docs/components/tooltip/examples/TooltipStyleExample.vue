<template>
  <div class="flex flex-wrap justify-center py-8 space-x-3">
    <!-- light style tooltip -->
    <Tooltip tooltip-style="tooltip-light">
      <template #trigger>
        <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Light Tooltip
        </button>
      </template>
      <template #content>
        Tooltip content
      </template>
    </Tooltip>
    <!-- dark style tooltip -->
    <Tooltip tooltip-style="tooltip-dark">
      <template #trigger>
        <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Dark Tooltip
        </button>
      </template>
      <template #content>
        Tooltip content
      </template>
    </Tooltip>
  </div>
</template>

<script setup>
  import { Tooltip } from '../../../../src/index'
</script>