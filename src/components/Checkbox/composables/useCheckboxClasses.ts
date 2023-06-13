import type { Ref } from 'vue'
import { computed } from 'vue'
import { simplifyTailwindClasses } from '@/utils/simplifyTailwindClasses'

// LABEL
const defaultLabelClasses = 'block text-sm font-medium text-gray-900 dark:text-gray-300'

// CHECKBOX
const defaultCheckboxClasses = 'w-4 h-4 rounded bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
const checkboxSizeClasses: Record<any, string> = {
  lg: 'p-4',
  md: 'p-2.5 text-sm',
  sm: 'p-2 text-sm',
}

export type UseCheckboxClassesProps = {
  disabled: any
}

export function useCheckboxClasses(props: UseCheckboxClassesProps) {
  const checkboxClasses = computed(() => {
      return simplifyTailwindClasses(defaultCheckboxClasses)
  })

  const labelClasses = computed(() => {
    return defaultLabelClasses
  })

  return { 
    checkboxClasses,
    labelClasses,
  }
}