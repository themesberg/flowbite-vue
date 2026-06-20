import { computed, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { type ValidationStatus, validationStatusMap } from '@/types/form'

const defaultWrapperClasses = 'border-0 m-0 p-0 min-w-0'
const defaultLegendClasses = 'mb-2 text-sm font-medium'
const defaultHelperClasses = 'mt-1 text-xs font-normal text-gray-500 dark:text-gray-300'

const errorTextClasses = 'text-red-700 dark:text-red-500'
const successTextClasses = 'text-green-700 dark:text-green-500'
const neutralTextClasses = 'text-gray-900 dark:text-gray-300'

export type UseRadioGroupClassesProps = {
  legendClass: Ref<string | Record<string, boolean>>
  validationStatus: Ref<ValidationStatus | undefined>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useRadioGroupClasses (props: UseRadioGroupClassesProps) {
  const wrapperClass = computed(() => useMergeClasses([defaultWrapperClasses, props.wrapperClass.value]))

  const legendClass = computed(() => {
    const vs = props.validationStatus.value
    return useMergeClasses([
      defaultLegendClasses,
      vs === validationStatusMap.Error
        ? errorTextClasses
        : vs === validationStatusMap.Success
          ? successTextClasses
          : neutralTextClasses,
      props.legendClass.value,
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

  return { helperMessageClass, legendClass, validationMessageClass, wrapperClass }
}
