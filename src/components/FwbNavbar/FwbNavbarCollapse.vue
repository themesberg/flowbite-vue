<template>
  <div :class="menuClasses">
    <ul :class="listClasses">
      <slot name="default" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md')
const props = defineProps({
  isShowMenu: {
    type: Boolean,
    default: false,
  },
})

const menuClassesDefault = 'w-full md:block md:w-auto'
const listClassesDefault = 'flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'
const mobileListClasses = 'bg-gray-50'
const menuClasses = computed(() => useMergeClasses([
  menuClassesDefault,
  props.isShowMenu ? '' : 'hidden',
]))
const listClasses = computed(() => useMergeClasses([
  listClassesDefault,
  isMobile.value ? mobileListClasses : '',
]))
</script>
