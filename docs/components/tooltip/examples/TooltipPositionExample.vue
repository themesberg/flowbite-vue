<template>
  <div class="flex flex-wrap justify-center py-8 space-x-3">
    <!-- Show tooltip on top -->
    <Tooltip placement="top">
      <template #trigger>
        <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Tooltip top
        </button>
      </template>
      <template #content>
        Tooltip on top
      </template>
    </Tooltip>
    <!-- Show tooltip on right -->
    <Tooltip placement="right">
      <template #trigger>
        <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Tooltip right
        </button>
      </template>
      <template #content>
        Tooltip on right
      </template>
    </Tooltip>
    <!-- Show tooltip on bottom -->
    <Tooltip placement="bottom">
      <template #trigger>
        <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Tooltip bottom
        </button>
      </template>
      <template #content>
        Tooltip on bottom
      </template>
    </Tooltip>
    <!-- Show tooltip on left -->
    <Tooltip placement="left">
      <template #trigger>
        <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Tooltip left
        </button>
      </template>
      <template #content>
        Tooltip on left
      </template>
    </Tooltip>
  </div>
</template>

<script setup>
  import { Tooltip } from '../../../../src/index'
</script>