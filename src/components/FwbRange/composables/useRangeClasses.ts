import { computed, type Ref } from 'vue'
import { simplifyTailwindClasses } from '@/utils/simplifyTailwindClasses'
import type { InputSize } from '@/components/FwbInput/types'

const rangeDefaultClasses = 'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
const rangeLabelClasses = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'

const rangeSizeClasses: Record<InputSize, string> = {
  lg: 'h-3 range-lg',
  md: 'h-2 range-md',
  sm: 'h-1 range-sm',
}

export type UseRangeClassesProps = {
  size: Ref<InputSize>
  disabled: Ref<boolean>
}

export function useRangeClasses (props: UseRangeClassesProps) {
  const rangeClasses = computed(() => simplifyTailwindClasses(
    rangeDefaultClasses,
    rangeSizeClasses[props.size.value],
  ))

  const labelClasses = computed(() => rangeLabelClasses)

  return {
    rangeClasses,
    labelClasses,
  }
}
