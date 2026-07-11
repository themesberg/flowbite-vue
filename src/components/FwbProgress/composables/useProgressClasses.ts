import { computed, type Ref } from 'vue'

import type { ProgressColorVariant, ProgressSize } from '../types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const defaultInnerClasses = 'overflow-hidden rounded-full p-0.5 text-center font-medium text-blue-100'
const defaultOuterClasses = 'relative w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700'
const defaultOutsideLabelClasses = 'text-base font-medium text-gray-700 dark:text-white'

const progressColorClasses: Record<ProgressColorVariant, string> = {
  blue: 'bg-blue-700 dark:bg-blue-600',
  dark: 'bg-gray-800 dark:bg-gray-800',
  default: 'bg-blue-700 dark:bg-blue-600',
  green: 'bg-green-700 dark:bg-green-600',
  pink: 'bg-pink-700 dark:bg-pink-600',
  purple: 'bg-purple-700 dark:bg-purple-600',
  red: 'bg-red-700 dark:bg-red-600',
  yellow: 'bg-yellow-400',
}

const outsideTextColorClasses: Record<ProgressColorVariant, string> = {
  blue: 'text-blue-700 dark:text-blue-500',
  dark: 'dark:text-white',
  default: '',
  green: 'text-green-700 dark:text-green-500',
  pink: 'text-pink-700 dark:text-pink-500',
  purple: 'text-purple-700 dark:text-purple-500',
  red: 'text-red-700 dark:text-red-500',
  yellow: 'text-yellow-700 dark:text-yellow-500',
}

const progressSizeClasses: Record<ProgressSize, string> = {
  sm: 'h-1.5 text-xs leading-none',
  md: 'h-2.5 text-xs leading-none',
  lg: 'h-4 text-sm leading-none',
  xl: 'h-6 text-base leading-tight',
}

export type UseProgressClassesProps = {
  color: Ref<ProgressColorVariant>
  size: Ref<ProgressSize>
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
    progressColorClasses[props.color.value],
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
