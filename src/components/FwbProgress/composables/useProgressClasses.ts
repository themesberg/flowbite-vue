import { computed, type Ref } from 'vue'

import type { ProgressLabelPosition, ProgressSize, ProgressVariant } from '../types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const defaultInnerClasses = 'rounded-full p-0.5 text-center font-medium text-blue-100'
const defaultOuterClasses = 'w-full rounded-full bg-gray-200 dark:bg-gray-700'
const defaultOutsideLabelClasses = 'text-base font-medium'

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
  innerClasses?: Ref<string | Record<string, boolean>>
  outerClasses?: Ref<string | Record<string, boolean>>
  outsideLabelClasses?: Ref<string | Record<string, boolean>>
}

export function useProgressClasses (props: UseProgressClassesProps): {
  innerClasses: Ref<string>
  outerClasses: Ref<string>
  outsideLabelClasses: Ref<string>
} {
  const innerClasses = computed(() => useMergeClasses([
    defaultInnerClasses,
    barColorClasses[props.color.value],
    progressSizeClasses[props.size.value],
    props.innerClasses?.value || '',
  ]))

  const outerClasses = computed(() => useMergeClasses([
    defaultOuterClasses,
    progressSizeClasses[props.size.value],
    props.outerClasses?.value || '',
  ]))

  const outsideLabelClasses = computed(() => useMergeClasses([
    defaultOutsideLabelClasses,
    outsideTextColorClasses[props.color.value],
    props.outsideLabelClasses?.value || '',
  ]))

  return {
    innerClasses,
    outerClasses,
    outsideLabelClasses,
  }
}
