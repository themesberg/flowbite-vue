import { computed, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'

const defaultLabelClasses = 'text-sm font-medium text-gray-900 dark:text-gray-300 mr-1'
const defaultCheckboxClasses = 'mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
const defaultHelperClasses = 'ml-6 text-xs font-normal text-gray-500 dark:text-gray-300'

const disabledLabelClasses = 'text-gray-400 dark:text-gray-500'

export type UseCheckboxClassesProps = {
  class: Ref<string | Record<string, boolean>>
  disabled: Ref<boolean>
  labelClass: Ref<string | Record<string, boolean>>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useCheckboxClasses (props: UseCheckboxClassesProps): {
  checkboxClass: Ref<string>
  labelClass: Ref<string>
  helperMessageClass: Ref<string>
  wrapperClass: Ref<string>
} {
  const labelClass = computed(() => useMergeClasses([
    defaultLabelClasses,
    props.disabled.value ? disabledLabelClasses : '',
    props.labelClass.value,
  ]))

  const checkboxClass = computed(() => useMergeClasses([
    defaultCheckboxClasses,
    props.class.value,
  ]))

  const helperMessageClass = computed(() => useMergeClasses([
    defaultHelperClasses,
  ]))

  const wrapperClass = computed(() => useMergeClasses([
    props.wrapperClass.value,
  ]))

  return {
    checkboxClass,
    helperMessageClass,
    labelClass,
    wrapperClass,
  }
}
