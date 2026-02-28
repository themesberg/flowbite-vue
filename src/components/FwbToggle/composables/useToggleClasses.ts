import { computed, type Ref } from 'vue'

import type { FormElementSize } from '@/types/form'

// Toggle Background
const defaultLabelClasses = 'w-fit relative inline-flex items-center cursor-pointer'
const defaultToggleBackgroundClasses = 'relative bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-blue-600'
const defaultToggleBallClasses = 'text-sm font-medium text-gray-900 dark:text-gray-300'

const labelOrderClasses: Record<string, string> = {
  direct: '',
  reverse: 'flex-row-reverse',
}

const toggleBallOrderClasses: Record<string, string> = {
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
  color: Ref<string>
  reverse: Ref<boolean>
  size: Ref<FormElementSize>
}

export function useToggleClasses (props: UseToggleClassesProps) {
  const labelClasses = computed(() => defaultLabelClasses)
  const labelOrder = computed(() => labelOrderClasses[props.reverse.value ? 'reverse' : 'direct'])
  const toggleBallClasses = computed(() => defaultToggleBallClasses)
  const toggleBallOrder = computed(() => toggleBallOrderClasses[props.reverse.value ? 'reverse' : 'direct'])
  const toggleClasses = computed(() => defaultToggleBackgroundClasses)
  const toggleColor = computed(() => toggleColorClasses[props.color.value])
  const toggleSize = computed(() => toggleSizeClasses[props.size.value])

  return {
    labelClasses,
    labelOrder,
    toggleBallClasses,
    toggleBallOrder,
    toggleClasses,
    toggleColor,
    toggleSize,
  }
}
