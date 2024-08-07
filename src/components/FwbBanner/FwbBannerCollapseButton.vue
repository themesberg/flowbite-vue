<template>
  <button
    :class="collapseButtonClasses"
    aria-label="Collapse"
    type="button"
    @click="handleCollapse"
  >
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18 17.94 6M18 18 6.06 6"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMergeClasses } from '@/composables/useMergeClasses'

type CollapseButtonProps = {
    class?: string
}

const props: CollapseButtonProps = withDefaults(defineProps<CollapseButtonProps>(), {
  class: '',
})

const defaultCollapseButtonClass = 'flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white'

const collapseButtonClasses = computed(() => useMergeClasses([
  defaultCollapseButtonClass,
  props.class ?? '',
]))

const handleCollapse = (e: MouseEvent) => {
  const collapseButton = e.target as HTMLElement
  const banner = collapseButton.closest('[role="banner"]') as HTMLElement | null

  if (banner) {
    banner.remove()
  }
}

</script>
