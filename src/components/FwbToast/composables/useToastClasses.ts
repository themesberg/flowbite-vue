import { computed, type Ref } from 'vue'
import type { ToastAlign, ToastColor } from '../types'
import { twMerge } from 'tailwind-merge'

type UseToastClassesReturns = {
  typeClasses: Ref<string>
  wrapperClasses: Ref<string>
  contentClasses: Ref<string>
}

type UseToastClassesProps = {
  color: ToastColor,
  alignment: ToastAlign,
  dismissable: boolean,
  divide: boolean,
}

const typeClassesMap: Record<ToastColor, string> = {
  primary: 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200',
  red: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200',
  blue: 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200',
  green: 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
  yellow: 'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200',
  gray: 'text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-200',
  indigo: 'text-indigo-500 bg-indigo-100 dark:bg-indigo-700 dark:text-indigo-200',
  purple: 'text-purple-500 bg-purple-100 dark:bg-purple-700 dark:text-purple-200',
  orange: 'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200',
  none: '',
}

const wrapperAlignmentClasses: Record<ToastAlign, string> = {
  center: 'items-center',
  end: 'items-end',
  start: 'items-start',
}
const defaultWrapperClasses = 'flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'

const defaultContentClasses = 'text-sm font-normal'

export function useToastClasses (props: UseToastClassesProps): UseToastClassesReturns {
  const typeClasses = computed(() => typeClassesMap[props.color])
  console.log('typeClasses', typeClasses.value, props.color)

  const wrapperClasses = computed(() => {
    const alignmentClass = wrapperAlignmentClasses[props.alignment]

    if (props.divide) {
      return twMerge(defaultWrapperClasses, 'dark:divide-gray-700 divide-x divide-gray-200', alignmentClass)
    }

    return twMerge(defaultWrapperClasses, alignmentClass)
  })

  const contentClasses = computed(() => {
    if (props.divide) {
      return twMerge(defaultContentClasses, 'pl-3')
    }

    return defaultContentClasses
  })

  return {
    typeClasses,
    wrapperClasses,
    contentClasses,
  }
}
