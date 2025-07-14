import { twMerge } from 'tailwind-merge'
import { computed, type Ref } from 'vue'

const baseWrapperClasses = 'relative w-full'
const baseDropdownClasses = 'absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto'
const baseDropdownItemClasses = 'px-4 py-3 cursor-pointer transition-colors duration-150 border-b border-gray-200 dark:border-gray-600 last:border-b-0'
const highlightedDropdownItemClasses = 'bg-blue-50 dark:bg-blue-900/20'
const hoverDropdownItemClasses = 'hover:bg-gray-50 dark:hover:bg-gray-700'
const baseMessageClasses = 'px-4 py-3 text-center text-gray-500 dark:text-gray-400'

export interface UseAutocompleteClassesProps {
  class?: Ref<string | Record<string, boolean> | undefined>
  wrapperClass?: Ref<string | Record<string, boolean> | undefined>
  labelClass?: Ref<string | Record<string, boolean> | undefined>
  dropdownClass?: Ref<string | Record<string, boolean> | undefined>
}

export function useAutocompleteClasses (props: UseAutocompleteClassesProps) {
  const wrapperClasses = computed(() => {
    return twMerge(
      baseWrapperClasses,
      typeof props.wrapperClass?.value === 'string' ? props.wrapperClass.value : '',
    )
  })

  const dropdownClasses = computed(() => {
    return twMerge(
      baseDropdownClasses,
      typeof props.dropdownClass?.value === 'string' ? props.dropdownClass.value : '',
    )
  })

  const getDropdownItemClasses = (isHighlighted: boolean) => {
    return twMerge(
      baseDropdownItemClasses,
      isHighlighted ? highlightedDropdownItemClasses : hoverDropdownItemClasses,
    )
  }

  const messageClasses = computed(() => baseMessageClasses)

  return {
    wrapperClasses,
    dropdownClasses,
    getDropdownItemClasses,
    messageClasses,
  }
}
