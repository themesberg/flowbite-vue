import { computed, inject, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'

const baseClasses = 'px-6 py-3 text-xs uppercase'
const stripedHeadCellClasses = 'even:bg-white even:dark:bg-gray-900 odd:dark:bg-gray-800 odd:bg-gray-50'

export function useTableHeadCellClasses (): { tableHeadCellClasses: Ref<string> } {
  const isColumnsStriped = inject('stripedColumns', false)

  const tableHeadCellClasses = computed(() => useMergeClasses([
    baseClasses,
    { [stripedHeadCellClasses]: isColumnsStriped },
  ]))

  return { tableHeadCellClasses }
}
