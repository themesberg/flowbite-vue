import type { Ref } from 'vue'
import { computed } from 'vue'
import classNames from 'classnames'
import type { ProgressVariant } from '../types'


export type ProgressClassMap<T extends string> = { default: Record<T, string> }

const progressColorClasses: ProgressClassMap<ProgressVariant> = {
  default: {
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
  },
}

export type UseProgressClassesProps = {
  color: Ref<ProgressVariant>
}

export function useProgressClasses(props: UseProgressClassesProps): { wrapperClasses: Ref<string>} {
  
  const bindClasses = computed(() => {
    let colorClass = ''

    const color = props.color.value
    colorClass = progressColorClasses.default[color as unknown as keyof typeof progressColorClasses.default]

    return classNames(
      colorClass
    )
  })

  return {
    wrapperClasses: bindClasses,
  }
}