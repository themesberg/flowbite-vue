import type { Ref } from 'vue'
import { computed } from 'vue'
import classNames from 'classnames'
import type { ProgressVariant, ProgressSize } from '../types'


// export type ProgressClassMap<T extends string> = { default: Record<T, string> }

const barColorClasses: Record<ProgressVariant, string> = {
  // const progressColorClasses: ProgressClassMap<ProgressVariant> = {
  // default: {
    default: 'bg-blue-600 dark:bg-blue-600',
    blue: 'bg-blue-600 dark:bg-blue-600',
    alternative: 'dark:bg-gray-800',
    dark: 'bg-gray-600 dark:bg-gray-300',
    light: 'bg-white dark:bg-gray-800',
    green: 'bg-green-600 dark:bg-green-500',
    red: 'bg-red-600 dark:bg-red-500',
    yellow: 'bg-yellow-400',
    purple: 'bg-purple-600 dark:bg-purple-500',
    pink: 'bg-pink-700 dark:bg-pink-600',
  // },
}

const outsideTextColorClasses: Record<ProgressVariant, string> = {
    default: 'text-blue-700 dark:text-blue-500',
    blue: 'text-blue-700 dark:text-blue-500',
    alternative: 'dark:bg-gray-800',
    dark: 'dark:text-white',
    light: 'text-white dark:text-gray-800',
    green: 'text-green-700 dark:text-green-500',
    red: 'text-red-700 dark:text-red-500',
    yellow: 'text-yellow-700 dark:text-yellow-500',
    purple: 'text-purple-700 dark:text-purple-500',
    pink: 'text-pink-700 dark:text-pink-600',
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
}

export function useProgressClasses(props: UseProgressClassesProps): { innerClasses: Ref<string>, outerClasses: Ref<string>, outsideLabelClasses: Ref<string>} {
  
  const bindClasses = computed(() => {
    let colorClass = ''
    colorClass = barColorClasses[props.color.value]

    let sizeClass = ''
    sizeClass = progressSizeClasses[props.size.value]

    return classNames(
      colorClass,
      sizeClass
    )
  })

  const outerClasses = computed(() => {
    let outerSizeClass = ''
    outerSizeClass = progressSizeClasses[props.size.value]
    return classNames(
      outerSizeClass
    )
  })

  const outsideLabelClasses = computed(() => {
    let outsideLabelClass = ''
    outsideLabelClass = outsideTextColorClasses[props.color.value]
    return classNames(
      outsideLabelClass
    )
  })

  
  return {
    innerClasses: bindClasses,
    outerClasses,
    outsideLabelClasses
  }
}