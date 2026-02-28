import { computed, type Ref } from 'vue'

import type { FormElementSize } from '@/types/form'

import { useMergeClasses } from '@/composables/useMergeClasses'

const rangeDefaultClasses = 'fwb-range-input w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
const rangeLabelClasses = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'

const rangeSizeClasses: Record<FormElementSize, string> = {
  sm: 'h-1 [&::-webkit-slider-thumb]:size-3 [&::-moz-range-thumb]:size-3',
  md: 'h-2 [&::-webkit-slider-thumb]:size-4 [&::-moz-range-thumb]:size-4',
  lg: 'h-3 [&::-webkit-slider-thumb]:size-5 [&::-moz-range-thumb]:size-5',
  xl: 'h-4 [&::-webkit-slider-thumb]:size-6 [&::-moz-range-thumb]:size-6',
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
