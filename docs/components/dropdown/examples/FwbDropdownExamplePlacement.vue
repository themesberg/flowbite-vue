<template>
  <div class="vp-raw flex gap-2 flex-wrap">
    <fwb-dropdown
      placement="top"
      text="Top"
    >
      <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Dashboard</a>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Settings</a>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Earnings</a>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Sign out</a>
      </nav>
    </fwb-dropdown>
    <fwb-dropdown
      placement="right"
      text="Right"
    >
      <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Dashboard</a>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Settings</a>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Earnings</a>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Sign out</a>
      </nav>
    </fwb-dropdown>
    <fwb-dropdown text="Bottom">
      <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Dashboard</a>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Settings</a>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Earnings</a>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Sign out</a>
      </nav>
    </fwb-dropdown>
    <fwb-dropdown
      placement="left"
      text="Left"
    >
      <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Dashboard</a>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Settings</a>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Earnings</a>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Sign out</a>
      </nav>
    </fwb-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { FwbDropdown } from '../../../../src/index'
</script>
