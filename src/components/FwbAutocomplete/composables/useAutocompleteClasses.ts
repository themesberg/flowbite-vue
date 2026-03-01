import { computed, type Ref } from 'vue'

import type { InputSize } from '@/components/FwbInput/types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const baseWrapperClasses = 'relative w-full'

const baseDropdownClasses = 'z-100 absolute bg-white dark:bg-gray-800 shadow-lg mt-1 border border-gray-300 dark:border-gray-600 rounded-lg w-full max-h-60 overflow-y-auto'
const baseDropdownItemClasses = 'px-4 py-3 border-gray-200 dark:border-gray-600 border-b last:border-b-0 text-gray-900 dark:text-white transition-colors duration-150 cursor-pointer'
const highlightedDropdownItemClasses = 'bg-blue-50 dark:bg-blue-900/20'
const hoverDropdownItemClasses = 'hover:bg-gray-50 dark:hover:bg-gray-700'

const baseMessageClasses = 'px-4 py-3 text-gray-500 dark:text-gray-400 text-center'

const dropdownItemSizeClasses: Record<string, string> = {
  sm: 'px-2.5 py-2 text-sm',
  md: 'px-3 py-2.5 text-sm',
  lg: 'px-3.5 py-3 text-base',
  xl: 'px-4 py-3.5 text-base',
}

export interface UseAutocompleteClassesProps {
  class: Ref<string | Record<string, boolean>>
  dropdownClass: Ref<string | Record<string, boolean>>
  labelClass: Ref<string | Record<string, boolean>>
  wrapperClass: Ref<string | Record<string, boolean>>
  zIndex: Ref<number>
}

export function useAutocompleteClasses (props: UseAutocompleteClassesProps): {
  dropdownClasses: Ref<string>
  getDropdownItemClasses: (isHighlighted: boolean, size: InputSize) => string
  messageClasses: Ref<string>
  wrapperClasses: Ref<string>
} {
  const wrapperClasses = computed(() => useMergeClasses([
    baseWrapperClasses,
    props.wrapperClass.value,
  ]))

  const dropdownClasses = computed(() => useMergeClasses([
    baseDropdownClasses,
    `z-[${props.zIndex.value}]`,
    props.dropdownClass.value,
  ]))

  const getDropdownItemClasses = (isHighlighted: boolean, size: InputSize) => useMergeClasses([
    baseDropdownItemClasses,
    isHighlighted ? highlightedDropdownItemClasses : hoverDropdownItemClasses,
    dropdownItemSizeClasses[size] ?? '',
  ])

  const messageClasses = computed(() => baseMessageClasses)

  return {
    dropdownClasses,
    getDropdownItemClasses,
    messageClasses,
    wrapperClasses,
  }
}
