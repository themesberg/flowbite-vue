import { computed, type Ref } from 'vue'

import { type InputSize, type ValidationStatus, validationStatusMap } from '../types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const defaultWrapperClasses = ''
const defaultLabelClasses = 'block mb-2 text-sm font-medium'
const defaultInputWrapperClasses = 'relative flex items-center has-[input:focus]:ring-offset-0 has-[input:focus]:ring-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg has-[input:focus]:ring-blue-500 has-[input:focus]:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:has-[input:focus]:ring-blue-500 dark:has-[input:focus]:border-blue-500'
const defaultInputClasses = 'block flex-grow w-full p-0 bg-transparent text-inherit ring-offset-0 ring-0 border-0 focus:ring-offset-0 focus:ring-0 focus:border-0 dark:placeholder-gray-400'
const defaultHelperClasses = 'mt-2 text-sm text-gray-500 dark:text-gray-400'

const disabledInputWrapperClasses = 'bg-gray-100'
const disabledInputClasses = 'cursor-not-allowed'

const inputSizeClasses: Record<InputSize, string> = {
  sm: 'p-2 text-sm',
  md: 'p-2.5 text-sm',
  lg: 'p-4',
}

const errorInputWrapperClasses = 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 has-[input:focus]:ring-red-500 has-[input:focus]:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
const errorTextClasses = 'text-red-700 dark:text-red-500'
const successInputWrapperClasses = 'bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 has-[input:focus]:ring-green-500 has-[input:focus]:border-green-500 '
const successTextClasses = 'text-green-700 dark:text-green-500'
const errorInputClasses = 'text-red-900 placeholder-red-700 dark:placeholder-red-500'
const successInputClasses = 'text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500'

export type UseInputClassesProps = {
  class: Ref<string | Record<string, boolean>>
  disabled: Ref<boolean>
  inputClass: Ref<string | Record<string, boolean>>
  labelClass: Ref<string | Record<string, boolean>>
  size: Ref<InputSize>
  validationStatus: Ref<ValidationStatus | undefined>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useInputClasses (props: UseInputClassesProps): {
  helperMessageClass: Ref<string>
  inputClass: Ref<string>
  inputWrapperClass: Ref<string>
  labelClass: Ref<string>
  validationMessageClass: Ref<string>
  wrapperClass: Ref<string>
} {
  const wrapperClass = computed(() => useMergeClasses([
    defaultWrapperClasses,
    props.wrapperClass.value,
  ]))

  const labelClass = computed(() => useMergeClasses([
    defaultLabelClasses,
    props.labelClass.value,
    props.validationStatus.value === validationStatusMap.Success
      ? successTextClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorTextClasses : '',
  ]))

  const inputWrapperClass = computed(() => useMergeClasses([
    defaultInputWrapperClasses,
    props.class.value,
    props.validationStatus.value === validationStatusMap.Success
      ? successInputWrapperClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorInputWrapperClasses : '',
    props.disabled.value ? disabledInputWrapperClasses : '',
  ]))

  const inputClass = computed(() => useMergeClasses([
    defaultInputClasses,
    inputSizeClasses[props.size.value],
    props.validationStatus.value === validationStatusMap.Success
      ? successInputClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorInputClasses : '',
    props.inputClass.value,
    props.disabled.value ? disabledInputClasses : '',
  ]))

  const validationMessageClass = computed(() => useMergeClasses([
    defaultHelperClasses,
    props.validationStatus.value === validationStatusMap.Success
      ? successTextClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorTextClasses : '',
  ]))

  const helperMessageClass = computed(() => useMergeClasses([
    defaultHelperClasses,
  ]))

  return {
    helperMessageClass,
    inputClass,
    inputWrapperClass,
    labelClass,
    validationMessageClass,
    wrapperClass,
  }
}
