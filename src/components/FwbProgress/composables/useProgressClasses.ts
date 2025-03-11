import classNames from 'classnames'
import { computed, type Ref } from 'vue'

import type { ProgressLabelPosition, ProgressSize, ProgressVariant } from '../types'

const barColorClasses: Record<ProgressVariant, string> = {
  default: 'bg-blue-600 dark:bg-blue-600',
  blue: 'bg-blue-600 dark:bg-blue-600',
  dark: 'bg-gray-600 dark:bg-gray-300',
  green: 'bg-green-600 dark:bg-green-500',
  red: 'bg-red-600 dark:bg-red-500',
  yellow: 'bg-yellow-400',
  indigo: 'bg-indigo-600 dark:bg-indigo-500',
  purple: 'bg-purple-600 dark:bg-purple-500',
}

const outsideTextColorClasses: Record<ProgressVariant, string> = {
  default: '',
  blue: 'text-blue-700 dark:text-blue-500',
  dark: 'dark:text-white',
  green: 'text-green-700 dark:text-green-500',
  red: 'text-red-700 dark:text-red-500',
  yellow: 'text-yellow-700 dark:text-yellow-500',
  indigo: 'text-indigo-700 dark:text-indigo-500',
  purple: 'text-purple-700 dark:text-purple-500',
}

const progressSizeClasses: Record<ProgressSize, string> = {
  sm: 'h-1.5 text-xs leading-none',
  md: 'h-2.5 text-xs leading-none',
  lg: 'h-4 text-sm leading-none',
  xl: 'h-6 text-base leading-tight',
}

export type UseProgressClassesProps = {
  color: Ref<ProgressVariant>
  size: Ref<ProgressSize>
  labelPosition: Ref<ProgressLabelPosition>
}

export function useProgressClasses (props: UseProgressClassesProps): { innerClasses: Ref<string>, outerClasses: Ref<string>, outsideLabelClasses: Ref<string> } {
  const bindClasses = computed(() => {
    return classNames(
      barColorClasses[props.color.value],
      progressSizeClasses[props.size.value],
    )
  })
  const outerClasses = computed(() => {
    return classNames(
      progressSizeClasses[props.size.value],
    )
  })
  const outsideLabelClasses = computed(() => {
    return classNames(
      outsideTextColorClasses[props.color.value],
    )
  })

  return {
    innerClasses: bindClasses,
    outerClasses,
    outsideLabelClasses,
  }
}
