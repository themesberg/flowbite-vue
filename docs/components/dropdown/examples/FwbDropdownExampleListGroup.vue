<template>
  <div class="vp-raw">
    <fwb-dropdown
      text="Menu"
      content-wrapper-class="rounded-lg"
    >
      <fwb-list-group class="text-sm text-gray-700 dark:text-gray-200">
        <fwb-list-group-item class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Dashboard
        </fwb-list-group-item>
        <fwb-list-group-item class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Settings
        </fwb-list-group-item>
        <fwb-list-group-item class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Earnings
        </fwb-list-group-item>
        <fwb-list-group-item class="cursor-pointer border-b-0 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Sign out
        </fwb-list-group-item>
      </fwb-list-group>
    </fwb-dropdown>
  </div>
</template>

<script setup>
import { FwbDropdown, FwbListGroup, FwbListGroupItem } from '../../../../src/index'
</script>
