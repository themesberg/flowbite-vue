import { computed, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { type ValidationStatus, validationStatusMap } from '@/types/form'

const defaultCheckboxClasses = 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed'
const defaultLabelTextClasses = 'ms-2 text-sm font-medium select-none'
const defaultHelperClasses = 'ms-6 mt-1 text-xs font-normal text-gray-500 dark:text-gray-300'

const errorTextClasses = 'text-red-700 dark:text-red-500'
const successTextClasses = 'text-green-700 dark:text-green-500'
const neutralTextClasses = 'text-gray-900 dark:text-gray-300'

export type UseCheckboxClassesProps = {
  class: Ref<string | Record<string, boolean>>
  disabled: Ref<boolean>
  labelClass: Ref<string | Record<string, boolean>>
  validationStatus: Ref<ValidationStatus | undefined>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useCheckboxClasses (props: UseCheckboxClassesProps) {
  const wrapperClass = computed(() => useMergeClasses(['flex flex-col items-start', props.wrapperClass.value]))

  const checkboxClass = computed(() => useMergeClasses([defaultCheckboxClasses, props.class.value]))

  const labelTextClass = computed(() => {
    const vs = props.validationStatus.value
    return useMergeClasses([
      defaultLabelTextClasses,
      vs === validationStatusMap.Success
        ? successTextClasses
        : vs === validationStatusMap.Error
          ? errorTextClasses
          : neutralTextClasses,
      props.disabled.value ? 'opacity-50 cursor-not-allowed' : '',
      props.labelClass.value,
    ])
  })

  const validationMessageClass = computed(() => {
    const vs = props.validationStatus.value
    return useMergeClasses([
      defaultHelperClasses,
      vs === validationStatusMap.Success
        ? successTextClasses
        : vs === validationStatusMap.Error ? errorTextClasses : '',
    ])
  })

  const helperMessageClass = computed(() => useMergeClasses([defaultHelperClasses]))

  return { checkboxClass, helperMessageClass, labelTextClass, validationMessageClass, wrapperClass }
}
