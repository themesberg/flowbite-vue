import { computed, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { type ValidationStatus, validationStatusMap } from '@/types/form'

const defaultRadioClasses = 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed'
const defaultLabelClasses = 'ms-2 text-sm font-medium'

const defaultWrapperClasses = 'flex items-center'

const errorTextClasses = 'text-red-700 dark:text-red-500'
const successTextClasses = 'text-green-700 dark:text-green-500'
const neutralTextClasses = 'text-gray-900 dark:text-gray-300'

export type UseRadioClassesProps = {
  class: Ref<string | Record<string, boolean>>
  disabled: Ref<boolean>
  labelClass: Ref<string | Record<string, boolean>>
  validationStatus: Ref<ValidationStatus | undefined>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useRadioClasses (props: UseRadioClassesProps) {
  const wrapperClass = computed(() => useMergeClasses([defaultWrapperClasses, props.wrapperClass.value]))

  const radioClass = computed(() => useMergeClasses([defaultRadioClasses, props.class.value]))

  const labelClass = computed(() => {
    const vs = props.validationStatus.value
    return useMergeClasses([
      defaultLabelClasses,
      vs === validationStatusMap.Error
        ? errorTextClasses
        : vs === validationStatusMap.Success
          ? successTextClasses
          : neutralTextClasses,
      props.disabled.value ? 'opacity-50 cursor-not-allowed' : '',
      props.labelClass.value,
    ])
  })

  return { labelClass, radioClass, wrapperClass }
}
