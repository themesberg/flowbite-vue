<template>
  <Tooltip :placement="placement" :class="colorStyle" hover arrow>

    <template #trigger>
      <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <slot name="trigger-text"></slot>
        </button>
    </template>

    <template #content>
      <slot name="tooltip"></slot>
    </template>

  </Tooltip>
</template>

<script lang="ts" setup>
import { Tooltip } from '../../../../src/index'
import type { PropType } from 'vue'
import type { TooltipPlacement, TooltipStyle } from '../../../../src/components/Tooltip/types'

const props = defineProps({
placement: {
  type: String as PropType<TooltipPlacement>,
  default: 'top'
},
colorStyle: {
  type: String  as PropType<TooltipStyle>,
  default: "tooltip-dark",
}

})
</script>
