<template>
  <div id="tooltip-default" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  arrow: {
    type: Boolean,
    default: true,
  },
  children: {
    type: Array,
    default() {
      return []
    },
  },
  duration: {
    type: Number, // animation = duration-300
    default: 300,
  },
  placement: {
    type: String, // top | right | bottom | left | {top/right/bottom/left}-{start/end}
    default: 'auto',
  },
  type: {
    type: String, // 'dark' | 'light' | 'auto'
    default: 'dark',
  },
  trigger: {
    type: String, // 'hover' | 'click'
    default: 'hover',
  },
})

</script>
