<template>
  <li>
    <div
      @click="toggleItem"
      class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
      :class="padding"
    >
      <span class="mr-3" v-if="hasIcon">
        <slot name="icon"/>
      </span>
      {{ label }}
      <svg
          class="h-6 w-6 ml-auto transition-transform"
          :class="{ 'rotate-180': !isCollapsed }"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 20 20"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
    </div>
    <ul v-if="!isCollapsed" class="py-2 space-y-2" >
      <slot />
    </ul>
  </li>
</template>
<script lang="ts" setup>
import { computed, inject, provide, ref, useSlots } from 'vue'

const baseDepth = 1
const depth = inject('depth', baseDepth)
provide('depth', depth + 1)

const padding = computed(() => {
  if (depth === baseDepth) return 'p-2'
  return `p-2 pl-${depth * 4}`
})

defineProps({
  label: {
    type: [ String ],
    default: '',
  },
})

const slots = useSlots()
const hasIcon = computed(() => !!slots.icon)

const isCollapsed = ref(true)
const toggleItem = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>
