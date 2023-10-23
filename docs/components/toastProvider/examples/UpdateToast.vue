<template>
  <fwb-toast
    v-bind="$attrs"
    @close="$emit('close')"
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
    </template>
    <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Update available</span>
    <div class="mb-2 text-sm font-normal">
      <slot />
    </div>
    <div class="grid grid-cols-2 gap-2">
      <fwb-button size="xs">
        Update
      </fwb-button>
      <fwb-button
        size="xs"
        :color="'alternative'"
      >
        Not now
      </fwb-button>
    </div>
  </fwb-toast>
</template>

<script setup>
import { FwbButton, FwbToast } from '../../../../src/index'

defineEmits(['close'])
</script>
