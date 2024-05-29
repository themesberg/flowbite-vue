<template>
  <div class="vp-raw flex justify-center">
    <fwb-toast
      alignment="start"
      closable
    >
      <template #icon>
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"
          />
        </svg>
        <span class="sr-only">Refresh icon</span>
      </template>
      <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Update available</span>
      <div class="mb-2 text-sm font-normal">
        A new software version is available for download.
      </div>
      <div class="grid grid-cols-2 gap-2">
        <fwb-button size="xs">
          Update
        </fwb-button>
        <fwb-button
          size="xs"
          color="alternative"
        >
          Not now
        </fwb-button>
      </div>
    </fwb-toast>
  </div>
</template>

<script setup>
import { FwbButton, FwbToast } from '../../../../src/index'
</script>
