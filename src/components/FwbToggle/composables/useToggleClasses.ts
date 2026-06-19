import { computed, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { type FormElementSize, type ValidationStatus, validationStatusMap } from '@/types/form'

const defaultToggleContainerClasses = 'w-fit relative inline-flex items-center cursor-pointer has-[:disabled]:cursor-not-allowed'
const defaultToggleBackgroundClasses = 'relative bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed'
const defaultLabelTextClasses = 'select-none text-sm font-medium'
const defaultHelperClasses = 'mt-2 text-sm text-gray-500 dark:text-gray-400'

const errorTextClasses = 'text-red-700 dark:text-red-500'
const successTextClasses = 'text-green-700 dark:text-green-500'
const neutralTextClasses = 'text-gray-900 dark:text-gray-300'

const toggleContainerOrderClasses: Record<'direct' | 'reverse', string> = {
  direct: '',
  reverse: 'flex-row-reverse',
}

const labelTextOrderClasses: Record<'direct' | 'reverse', string> = {
  direct: 'ms-3',
  reverse: 'me-3',
}

const toggleSizeClasses: Record<FormElementSize, string> = {
  sm: 'w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4',
  md: 'w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5',
  lg: 'w-14 h-7 after:top-0.5 after:start-[4px] after:h-6 after:w-6',
  xl: 'w-16 h-8 after:top-0.5 after:start-[4px] after:h-7 after:w-7',
}

const toggleColorClasses: Record<string, string> = {
  green: 'peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600',
  orange: 'peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500',
  purple: 'peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600',
  red: 'peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600',
  teal: 'peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600',
  yellow: 'peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400',
}

export type UseToggleClassesProps = {
  class: Ref<string | Record<string, boolean>>
  color: Ref<string>
  labelClass: Ref<string | Record<string, boolean>>
  reverse: Ref<boolean>
  size: Ref<FormElementSize>
  validationStatus: Ref<ValidationStatus | undefined>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useToggleClasses (props: UseToggleClassesProps) {
  const wrapperClass = computed(() => useMergeClasses(['flex flex-col items-start', props.wrapperClass.value]))

  const toggleContainerClass = computed(() => useMergeClasses([
    defaultToggleContainerClasses,
    toggleContainerOrderClasses[props.reverse.value ? 'reverse' : 'direct'],
  ]))

  const toggleBackgroundClass = computed(() => useMergeClasses([
    defaultToggleBackgroundClasses,
    toggleSizeClasses[props.size.value],
    props.color.value ? (toggleColorClasses[props.color.value] ?? '') : '',
    props.class.value,
  ]))

  const labelTextClass = computed(() => {
    const vs = props.validationStatus.value
    return useMergeClasses([
      defaultLabelTextClasses,
      labelTextOrderClasses[props.reverse.value ? 'reverse' : 'direct'],
      vs === validationStatusMap.Success
        ? successTextClasses
        : vs === validationStatusMap.Error
          ? errorTextClasses
          : neutralTextClasses,
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

  return { helperMessageClass, labelTextClass, toggleBackgroundClass, toggleContainerClass, validationMessageClass, wrapperClass }
}
