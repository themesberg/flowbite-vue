import { computed } from 'vue'

// Radio
export const radioDefaultClasses = 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
export const radioLabelClasses = 'm-2 mr-0 text-sm font-medium text-gray-900 dark:text-gray-300'

export function useRadioClasses() {
  const radioClasses = computed(() => {
    return radioDefaultClasses
  })

  const labelClasses = computed(() => {
    return radioLabelClasses
  })

  return {
    radioClasses,
    labelClasses,
  }
}
