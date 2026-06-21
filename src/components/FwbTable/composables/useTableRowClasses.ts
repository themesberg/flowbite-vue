import { computed, inject, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'

const baseClasses = 'bg-white dark:bg-gray-800 not-last:border-b not-last:dark:border-gray-700'
const stripedClasses = 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'
const hoverableClasses = 'hover:bg-gray-50 dark:hover:bg-gray-600'

export function useTableRowClasses (): { tableRowClasses: Ref<string> } {
  const isStriped = inject('striped', false)
  const isHoverable = inject('hoverable', false)

  const tableRowClasses = computed(() => useMergeClasses([
    baseClasses,
    {
      [hoverableClasses]: isHoverable,
      [stripedClasses]: isStriped,
    },
  ]))

  return { tableRowClasses }
}
