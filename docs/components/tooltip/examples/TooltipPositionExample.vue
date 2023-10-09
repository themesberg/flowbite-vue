<template>
  <div class="flex flex-wrap justify-center py-8 space-x-3">
    <!-- Show tooltip on top -->
    <tooltip placement="top">
      <template #trigger>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tooltip top
        </button>
      </template>
      <template #content>
        Tooltip on top
      </template>
    </tooltip>
    <!-- Show tooltip on right -->
    <tooltip placement="right">
      <template #trigger>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tooltip right
        </button>
      </template>
      <template #content>
        Tooltip on right
      </template>
    </tooltip>
    <!-- Show tooltip on bottom -->
    <tooltip placement="bottom">
      <template #trigger>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tooltip bottom
        </button>
      </template>
      <template #content>
        Tooltip on bottom
      </template>
    </tooltip>
    <!-- Show tooltip on left -->
    <tooltip placement="left">
      <template #trigger>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tooltip left
        </button>
      </template>
      <template #content>
        Tooltip on left
      </template>
    </tooltip>
  </div>
</template>

<script setup>
import { Tooltip } from '../../../../src/index'
</script>
