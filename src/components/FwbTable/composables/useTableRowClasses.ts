import classNames from 'classnames'
import { computed, inject, type Ref } from 'vue'

const baseClasses = 'bg-white dark:bg-gray-800 [&:not(:last-child)]:border-b [&:not(:last-child)]:dark:border-gray-700'
const stripedClasses = 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'
const hoverableClasses = 'hover:bg-gray-50 dark:hover:bg-gray-600'

export function useTableRowClasses (): { tableRowClasses: Ref<string> } {
  const isStriped = inject('striped')
  const isHoverable = inject('hoverable')

  const tableRowClasses = computed(() => classNames(
    baseClasses,
    {
      [hoverableClasses]: isHoverable,
      [stripedClasses]: isStriped,
    },
  ))

  return { tableRowClasses }
}
