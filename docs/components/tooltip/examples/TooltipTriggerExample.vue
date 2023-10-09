<template>
  <div class="flex flex-wrap justify-center py-8 space-x-3">
    <!-- Show tooltip on hover -->
    <tooltip trigger="hover">
      <template #trigger>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tooltip hover
        </button>
      </template>
      <template #content>
        Tooltip content
      </template>
    </tooltip>
    <!-- Show tooltip on click -->
    <tooltip trigger="click">
      <template #trigger>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tooltip click
        </button>
      </template>
      <template #content>
        Tooltip content
      </template>
    </tooltip>
  </div>
</template>

<script lang="ts" setup>
import { Tooltip } from '../../../../src/index'
import type { PropType } from 'vue'
import type { TooltipPlacement } from '../../../../src/components/Tooltip/types'

defineProps({
  placement: {
    type: String as PropType<TooltipPlacement>,
    default: 'top',
  },
  arrowColor: {
    type: String,
    default: '#0f172a',
  },
})
</script>
