import type { FormElementSize, ValidationStatus } from '@/types/form'

export type ToggleColor = 'red' | 'green' | 'purple' | 'yellow' | 'teal' | 'orange'

export interface ToggleProps {
  class?: string | Record<string, boolean>
  color?: ToggleColor | string
  disabled?: boolean
  label?: string
  labelClass?: string | Record<string, boolean>
  reverse?: boolean
  size?: FormElementSize
  validationStatus?: ValidationStatus
  wrapperClass?: string | Record<string, boolean>
}
