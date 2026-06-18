import { computed, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { type FormElementSize, type ValidationStatus, validationStatusMap } from '@/types/form'

const baseWrapperClasses = 'relative w-full'

const baseDropdownClasses = 'absolute bg-white dark:bg-gray-800 shadow-lg mt-1 border border-gray-300 dark:border-gray-600 rounded-lg w-full max-h-60 overflow-y-auto'
const baseDropdownItemClasses = 'px-4 py-3 border-gray-200 dark:border-gray-600 border-b last:border-b-0 text-gray-900 dark:text-white transition-colors duration-150 cursor-pointer'
const highlightedDropdownItemClasses = 'bg-blue-50 dark:bg-blue-900/20'
const hoverDropdownItemClasses = 'hover:bg-gray-50 dark:hover:bg-gray-700'

const baseMessageClasses = 'px-4 py-3 text-gray-500 dark:text-gray-400 text-center'
const defaultHelperClasses = 'mt-2 text-gray-500 dark:text-gray-400 text-sm'
const defaultValidationMessageClasses = 'mt-2 text-sm'
const errorTextClasses = 'text-rose-600 dark:text-rose-500'
const successTextClasses = 'text-emerald-600 dark:text-emerald-500'

const dropdownItemSizeClasses: Record<string, string> = {
  sm: 'px-2.5 py-2 text-sm',
  md: 'px-3 py-2.5 text-sm',
  lg: 'px-3.5 py-3 text-base',
  xl: 'px-4 py-3.5 text-base',
}

export interface UseAutocompleteClassesProps {
  dropdownClass: Ref<string | Record<string, boolean>>
  labelClass: Ref<string | Record<string, boolean>>
  validationStatus: Ref<ValidationStatus | undefined>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useAutocompleteClasses (props: UseAutocompleteClassesProps): {
  dropdownClasses: Ref<string>
  getDropdownItemClasses: (isHighlighted: boolean, size: FormElementSize) => string
  helperMessageClass: Ref<string>
  messageClasses: Ref<string>
  validationMessageClass: Ref<string>
  wrapperClasses: Ref<string>
} {
  const wrapperClasses = computed(() => useMergeClasses([
    baseWrapperClasses,
    props.wrapperClass.value,
  ]))

  const dropdownClasses = computed(() => useMergeClasses([
    baseDropdownClasses,
    props.dropdownClass.value,
  ]))

  const getDropdownItemClasses = (isHighlighted: boolean, size: FormElementSize) => useMergeClasses([
    baseDropdownItemClasses,
    isHighlighted ? highlightedDropdownItemClasses : hoverDropdownItemClasses,
    dropdownItemSizeClasses[size] ?? '',
  ])

  const messageClasses = computed(() => baseMessageClasses)

  const validationMessageClass = computed(() => useMergeClasses([
    defaultValidationMessageClasses,
    props.validationStatus.value === validationStatusMap.Success
      ? successTextClasses
      : props.validationStatus.value === validationStatusMap.Error
        ? errorTextClasses
        : '',
  ]))

  const helperMessageClass = computed(() => useMergeClasses([
    defaultHelperClasses,
  ]))

  return {
    dropdownClasses,
    getDropdownItemClasses,
    helperMessageClass,
    messageClasses,
    validationMessageClass,
    wrapperClasses,
  }
}
