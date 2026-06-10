import { computed, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { type FormElementSize, type ValidationStatus, validationStatusMap } from '@/types/form'

const defaultWrapperClasses = ''
const defaultLabelClasses = 'block mb-2 font-medium text-gray-900 dark:text-white text-sm'
const defaultHelperClasses = 'mt-2 text-gray-500 dark:text-gray-400 text-sm'

const defaultSelectClasses = 'w-full appearance-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white shadow-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500'
const borderSelectClasses = 'border border-gray-300 dark:border-gray-600 rounded-lg'
const underlineSelectClasses = 'bg-transparent dark:bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
const disabledSelectClasses = 'cursor-not-allowed bg-gray-100'

const selectSizeClasses: Record<FormElementSize, string> = {
  sm: 'pl-2.5 pr-8 py-2 text-sm',
  md: 'pl-3 pr-8 py-2.5 text-sm',
  lg: 'pl-3.5 pr-8 py-3 text-base',
  xl: 'pl-4 pr-8 py-3.5 text-base',
}

const errorSelectClasses = 'bg-red-50 border-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:border-rose-500 dark:focus:ring-rose-500 text-rose-900 dark:text-rose-500'
const errorTextClasses = 'text-rose-900 dark:text-rose-500'
const successSelectClasses = 'bg-green-50 border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500 dark:border-emerald-500 dark:focus:ring-emerald-500 text-emerald-900 dark:text-emerald-400'
const successTextClasses = 'text-emerald-900 dark:text-emerald-500'

const errorUnderlineClasses = 'focus:border-rose-500'
const successUnderlineClasses = 'focus:border-emerald-500'

export type UseSelectClassesProps = {
  chevronClass: Ref<string | Record<string, boolean>>
  class: Ref<string | Record<string, boolean>>
  disabled: Ref<boolean>
  labelClass: Ref<string | Record<string, boolean>>
  size: Ref<FormElementSize>
  underline: Ref<boolean>
  validationStatus: Ref<ValidationStatus | undefined>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useSelectClasses (props: UseSelectClassesProps): {
  chevronClass: Ref<string>
  helperMessageClass: Ref<string>
  labelClass: Ref<string>
  selectClass: Ref<string>
  validationMessageClass: Ref<string>
  wrapperClass: Ref<string>
} {
  const wrapperClass = computed(() => useMergeClasses([
    defaultWrapperClasses,
    props.wrapperClass.value,
  ]))

  const labelClass = computed(() => useMergeClasses([
    defaultLabelClasses,
    props.validationStatus.value === validationStatusMap.Success
      ? successTextClasses
      : props.validationStatus.value === validationStatusMap.Error
        ? errorTextClasses
        : '',
    props.labelClass.value,
  ]))

  const selectClass = computed(() => {
    const vs = props.validationStatus.value
    const classByStatus = vs === validationStatusMap.Success
      ? successSelectClasses
      : vs === validationStatusMap.Error ? errorSelectClasses : ''
    const underlineByStatus = vs === validationStatusMap.Success
      ? successUnderlineClasses
      : vs === validationStatusMap.Error ? errorUnderlineClasses : ''

    return useMergeClasses([
      defaultSelectClasses,
      selectSizeClasses[props.size.value],
      props.underline.value ? underlineSelectClasses : borderSelectClasses,
      classByStatus,
      props.underline.value ? underlineByStatus : '',
      props.disabled.value ? disabledSelectClasses : '',
      props.class.value,
    ])
  })

  const validationMessageClass = computed(() => useMergeClasses([
    defaultHelperClasses,
    props.validationStatus.value === validationStatusMap.Success
      ? successTextClasses
      : props.validationStatus.value === validationStatusMap.Error
        ? errorTextClasses
        : '',
  ]))

  const chevronClass = computed(() => {
    const stateClass = props.disabled.value
      ? 'text-gray-400 dark:text-gray-500'
      : props.validationStatus.value === validationStatusMap.Success
        ? successTextClasses
        : props.validationStatus.value === validationStatusMap.Error
          ? errorTextClasses
          : 'text-gray-900 dark:text-white'

    return useMergeClasses([stateClass, props.chevronClass.value])
  })

  const helperMessageClass = computed(() => useMergeClasses([
    defaultHelperClasses,
  ]))

  return {
    chevronClass,
    helperMessageClass,
    labelClass,
    selectClass,
    validationMessageClass,
    wrapperClass,
  }
}
