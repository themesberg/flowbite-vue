import { computed, type Ref } from 'vue'
import type { InputSize } from '@/components/FwbInput/types'

// Toggle Background
const defaultLabelClasses = 'w-fit relative inline-flex items-center cursor-pointer'
const defaultToggleBackgroundClasses = 'relative bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-blue-600'
const defaultToggleBallClasses = 'text-sm font-medium text-gray-900 dark:text-gray-300'

const labelOrderClasses: Record<string, string> = {
  direct: '',
  reverse: 'flex-row-reverse',
}

const toggleBallOrderClasses: Record<string, string> = {
  direct: 'ms-3',
  reverse: 'me-3',
}

const toggleSizeClasses: Record<InputSize, string> = {
  lg: 'w-14 h-7 after:top-0.5 after:start-[4px] after:h-6 after:w-6',
  md: 'w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5',
  sm: 'w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4',
}

const toggleColorClasses: Record<string, string> = {
  red: 'peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600',
  green: 'peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600',
  purple: 'peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600',
  yellow: 'peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400',
  teal: 'peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600',
  orange: 'peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500',
}

export type UseToggleClassesProps = {
  size: Ref<InputSize>
  color: Ref<string>
  reverse: Ref<boolean>
}

export function useToggleClasses (props: UseToggleClassesProps) {
  const labelClasses = computed(() => defaultLabelClasses)
  const toggleClasses = computed(() => defaultToggleBackgroundClasses)
  const toggleSize = computed(() => toggleSizeClasses[props.size.value])
  const toggleColor = computed(() => toggleColorClasses[props.color.value])
  const toggleBallClasses = computed(() => defaultToggleBallClasses)
  const toggleBallOrder = computed(() => toggleBallOrderClasses[props.reverse.value ? 'reverse' : 'direct'])
  const labelOrder = computed(() => labelOrderClasses[props.reverse.value ? 'reverse' : 'direct'])

  return {
    labelClasses,
    toggleSize,
    toggleClasses,
    toggleColor,
    toggleBallClasses,
    toggleBallOrder,
    labelOrder,
  }
}
