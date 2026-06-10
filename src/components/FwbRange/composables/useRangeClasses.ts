import { computed, type Ref } from 'vue'

import type { FormElementSize } from '@/types/form'

import { useMergeClasses } from '@/composables/useMergeClasses'

const rangeDefaultClasses = 'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
const rangeLabelClasses = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'

const rangeSizeClasses: Record<FormElementSize, string> = {
  sm: 'h-1 range-sm',
  md: 'h-2 range-md',
  lg: 'h-3 range-lg',
  xl: 'h-3 range-lg',
}

export type UseRangeClassesProps = {
  size: Ref<FormElementSize>
  disabled: Ref<boolean>
}

export function useRangeClasses (props: UseRangeClassesProps) {
  const rangeClasses = computed(() => useMergeClasses([
    rangeDefaultClasses,
    rangeSizeClasses[props.size.value],
  ]))

  const labelClasses = computed(() => rangeLabelClasses)

  return {
    rangeClasses,
    labelClasses,
  }
}
