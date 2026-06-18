import { computed, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { type FormElementSize, type ValidationStatus, validationStatusMap } from '@/types/form'

const defaultRangeClasses = 'fwb-range-input w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
const disabledRangeClasses = 'cursor-not-allowed opacity-50'
const defaultLabelClasses = 'block mb-2 text-sm font-medium'
const defaultHelperClasses = 'mt-2 text-sm text-gray-500 dark:text-gray-400'

const errorTextClasses = 'text-red-700 dark:text-red-500'
const successTextClasses = 'text-green-700 dark:text-green-500'
const neutralTextClasses = 'text-gray-900 dark:text-white'

const rangeSizeClasses: Record<FormElementSize, string> = {
  sm: 'h-1 [&::-webkit-slider-thumb]:size-3 [&::-moz-range-thumb]:size-3',
  md: 'h-2 [&::-webkit-slider-thumb]:size-4 [&::-moz-range-thumb]:size-4',
  lg: 'h-3 [&::-webkit-slider-thumb]:size-5 [&::-moz-range-thumb]:size-5',
  xl: 'h-4 [&::-webkit-slider-thumb]:size-6 [&::-moz-range-thumb]:size-6',
}

export type UseRangeClassesProps = {
  class: Ref<string | Record<string, boolean>>
  disabled: Ref<boolean>
  labelClass: Ref<string | Record<string, boolean>>
  size: Ref<FormElementSize>
  validationStatus: Ref<ValidationStatus | undefined>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useRangeClasses(props: UseRangeClassesProps) {
  const wrapperClass = computed(() => useMergeClasses([props.wrapperClass.value]))

  const labelClass = computed(() => {
    const vs = props.validationStatus.value
    return useMergeClasses([
      defaultLabelClasses,
      vs === validationStatusMap.Success
        ? successTextClasses
        : vs === validationStatusMap.Error
          ? errorTextClasses
          : neutralTextClasses,
      props.labelClass.value,
    ])
  })

  const rangeClass = computed(() => useMergeClasses([
    defaultRangeClasses,
    rangeSizeClasses[props.size.value],
    props.disabled.value ? disabledRangeClasses : '',
    props.class.value,
  ]))

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

  return { helperMessageClass, labelClass, rangeClass, validationMessageClass, wrapperClass }
}
