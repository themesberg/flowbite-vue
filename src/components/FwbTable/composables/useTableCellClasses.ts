import { computed, inject, type Ref } from 'vue'
import classNames from 'classnames'

const baseClasses = 'px-6 py-4 first:font-medium first:text-gray-900 first:dark:text-white first:whitespace-nowrap last:text-right'
const stripedCellClasses = 'even:bg-gray-white even:dark:bg-gray-900 odd:dark:bg-gray-800 odd:bg-gray-50'

export function useTableCellClasses (): { tableCellClasses: Ref<string> } {
  const isColumnsStriped = inject('stripedColumns')

  const tableCellClasses = computed(() => classNames(
    baseClasses,
    { [stripedCellClasses]: isColumnsStriped },
  ))

  return { tableCellClasses }
}
