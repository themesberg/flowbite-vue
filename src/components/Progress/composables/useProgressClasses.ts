import type { Ref } from 'vue'
import { computed } from 'vue'
import classNames from 'classnames'
import type { ProgressVariant, ProgressSize } from '../types'


// export type ProgressClassMap<T extends string> = { default: Record<T, string> }

const progressColorClasses: Record<ProgressVariant, string> = {
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

const progressSizeClasses: Record<ProgressSize, string> = {
  sm: 'text-sm h-1.5',
  md: 'text-sm h-2.5',
  lg: 'text-base h-4',
  xl: 'text-base h-6',
}

export type UseProgressClassesProps = {
  color: Ref<ProgressVariant>
  size: Ref<ProgressSize>
}

export function useProgressClasses(props: UseProgressClassesProps): { wrapperClasses: Ref<string>, outerClass: Ref<string>} {
  
  const bindClasses = computed(() => {
    let colorClass = ''
    colorClass = progressColorClasses[props.color.value]

    let sizeClass = ''
    sizeClass = progressSizeClasses[props.size.value]

    return classNames(
      colorClass,
      sizeClass
    )
  })

  const outerClass = computed(() => {
    let outerSizeClass = ''
    outerSizeClass = progressSizeClasses[props.size.value]
    return classNames(
      outerSizeClass
    )
  })

  
  return {
    wrapperClasses: bindClasses,
    outerClass
  }
}