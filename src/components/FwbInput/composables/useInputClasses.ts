import { twMerge } from 'tailwind-merge'
import { computed, type Ref } from 'vue'

import {
  type InputSize,
  type ValidationStatus,
  validationStatusMap,
} from '../types'

// LABEL
const baseLabelClasses = 'block mb-2 text-sm font-medium'

// INPUT
const defaultInputClasses = 'block flex-grow w-full p-0 bg-transparent text-inherit ring-offset-0 ring-0 border-0 focus:ring-offset-0 focus:ring-0 focus:border-0'

// BLOCK
const defaultBlockClasses = 'has-[input:focus]:ring-offset-0 has-[input:focus]:ring-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg has-[input:focus]:ring-blue-500 has-[input:focus]:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:has-[input:focus]:ring-blue-500 dark:has-[input:focus]:border-blue-500'

const disabledInputClasses = 'cursor-not-allowed bg-gray-100'
const inputSizeClasses: Record<InputSize, string> = {
  lg: 'p-4',
  md: 'p-2.5 text-sm',
  sm: 'p-2 text-sm',
}

const successInputClasses = 'bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 has-[input:focus]:ring-green-500 has-[input:focus]:border-green-500'
const errorInputClasses = 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 has-[input:focus]:ring-red-500 has-[input:focus]:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'

export type UseInputClassesProps = {
  size: Ref<InputSize>
  disabled: Ref<boolean>
  validationStatus: Ref<ValidationStatus | undefined>
}

export function useInputClasses (props: UseInputClassesProps): {
  inputBlockClasses: Ref<string>
  inputClasses: Ref<string>
  labelClasses: Ref<string>
} {
  const inputBlockClasses = computed(() => {
    const vs = props.validationStatus.value

    const classByStatus = vs === validationStatusMap.Success
      ? successInputClasses
      : vs === validationStatusMap.Error
        ? errorInputClasses
        : ''

    return twMerge(
      defaultBlockClasses,
      classByStatus,
      props.disabled.value ? disabledInputClasses : '',
    )
  })

  const inputClasses = computed(() => {
    return twMerge(defaultInputClasses, inputSizeClasses[props.size.value])
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
    inputBlockClasses,
    inputClasses,
    labelClasses,
  }
}
