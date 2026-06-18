import type { FormElementSize, ValidationStatus } from '@/types/form'

export interface RangeProps {
  class?: string | Record<string, boolean>
  disabled?: boolean
  label?: string
  labelClass?: string | Record<string, boolean>
  max?: number
  min?: number
  size?: FormElementSize
  steps?: number
  validationStatus?: ValidationStatus
  wrapperClass?: string | Record<string, boolean>
}
