import { computed } from 'vue'

import { simplifyTailwindClasses } from '@/utils/simplifyTailwindClasses'

// LABEL
const defaultLabelClasses = 'block text-sm font-medium text-gray-900 dark:text-gray-300'

// CHECKBOX
const defaultCheckboxClasses = 'w-4 h-4 rounded bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'

export function useCheckboxClasses () {
  const checkboxClasses = computed(() => simplifyTailwindClasses(defaultCheckboxClasses))
  const labelClasses = computed(() => defaultLabelClasses)

  return {
    checkboxClasses,
    labelClasses,
  }
}
