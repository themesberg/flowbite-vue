<template>
  <div class="vp-raw">
    <fwb-dropdown
      close-inside
      text="Closes after click on child"
    >
      <nav class="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col">
        <span class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</span>
        <span class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</span>
        <span class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</span>
        <span class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</span>
      </nav>
    </fwb-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { FwbDropdown } from '../../../../src/index'
</script>
