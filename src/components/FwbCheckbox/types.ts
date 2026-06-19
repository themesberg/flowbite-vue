import type { ValidationStatus } from '@/types/form'

export interface CheckboxProps {
  class?: string | Record<string, boolean>
  disabled?: boolean
  label?: string
  labelClass?: string | Record<string, boolean>
  validationStatus?: ValidationStatus
  wrapperClass?: string | Record<string, boolean>
}
