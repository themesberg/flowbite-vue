<template>
  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Default</span>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  children: {
    type: Array,
    default() {
      return []
    },
  },
  color: {
    type: String, // 'failure' | 'gray' | 'indigo' | 'info' | 'pink' | 'purple' | 'success'
    default: 'info',
  },
  href: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  size: {
    type: String, // 'xs' | 'sm'
    default: 'xs',
  },
})

</script>
