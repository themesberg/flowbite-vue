import { computed, type Ref } from 'vue'
import { twMerge } from 'tailwind-merge'
import {
  type InputSize,
  type ValidationStatus,
  validationStatusMap,
} from '../types'

// LABEL
const baseLabelClasses = 'block mb-2 text-sm font-medium'

// INPUT
const defaultInputClasses =
  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
const disabledInputClasses = 'cursor-not-allowed bg-gray-100'
const inputSizeClasses: Record<InputSize, string> = {
  lg: 'p-4',
  md: 'p-2.5 text-sm',
  sm: 'p-2 text-sm',
}

const successInputClasses = 'bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500'
const errorInputClasses = 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'

export type UseInputClassesProps = {
  size: Ref<InputSize>
  disabled: Ref<boolean>
  validationStatus: Ref<ValidationStatus | undefined>
}

export function useInputClasses (props: UseInputClassesProps): {
  inputClasses: Ref<string>
  labelClasses: Ref<string>
} {
  const inputClasses = computed(() => {
    const vs = props.validationStatus.value

    const classByStatus = vs === validationStatusMap.Success
      ? successInputClasses
      : vs === validationStatusMap.Error
        ? errorInputClasses
        : ''

    return twMerge(
      defaultInputClasses,
      classByStatus,
      inputSizeClasses[props.size.value],
      props.disabled.value ? disabledInputClasses : '',
    )
  })

  const labelClasses = computed(() => {
    const vs = props.validationStatus.value
    const classByStatus = vs === validationStatusMap.Success
      ? 'text-green-700 dark:text-green-500'
      : vs === validationStatusMap.Error
        ? 'text-red-700 dark:text-red-500'
        : 'text-gray-900 dark:text-white'

    return twMerge(baseLabelClasses, classByStatus)
  })

  return {
    inputClasses,
    labelClasses,
  }
}
