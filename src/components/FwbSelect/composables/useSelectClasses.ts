import type { Ref } from 'vue'
import { computed } from 'vue'
import { simplifyTailwindClasses } from '@/utils/simplifyTailwindClasses'
import type { InputSize } from '@/components/FwbInput/types'

// LABEL
const defaultLabelClasses = 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'

// SELECT
const defaultSelectClasses = 'w-full text-gray-900 bg-gray-50 border-[1px] border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
const disabledSelectClasses = 'cursor-not-allowed bg-gray-100'
const underlineSelectClasses = 'bg-transparent dark:bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer rounded-none'
const selectSizeClasses: Record<InputSize, string> = {
  lg: 'p-4',
  md: 'p-2.5 text-sm',
  sm: 'p-2 text-sm',
}

export type UseSelectClassesProps = {
  size: Ref<InputSize>
  disabled: Ref<boolean>
  underline: Ref<boolean>
}

export function useSelectClasses (props: UseSelectClassesProps) {
  const selectClasses = computed(() => simplifyTailwindClasses(
    defaultSelectClasses,
    selectSizeClasses[props.size.value],
    props.disabled.value ? disabledSelectClasses : '',
  ))

  const underlineClasses = computed(() => underlineSelectClasses)
  const labelClasses = computed(() => defaultLabelClasses)

  return {
    selectClasses,
    underlineClasses,
    labelClasses,
  }
}
