import { computed } from 'vue'

// Range
const rangeDefaultClasses = 'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
const rangeLabelClasses = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'

export function useRangeClasses() {
  const rangeClasses = computed(() => {
    return rangeDefaultClasses
  })

  const labelClasses = computed(() => {
    return rangeLabelClasses
  })

  return {
    rangeClasses,
    labelClasses,
  }
} 