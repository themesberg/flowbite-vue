import type { Autocomplete, FormElementSize, ValidationStatus } from '@/types/form'

export { validationStatusMap } from '@/types/form'

export type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'

export interface InputProps {
  autocomplete?: Autocomplete
  class?: string | Record<string, boolean>
  disabled?: boolean
  inputClass?: string | Record<string, boolean>
  label?: string
  labelClass?: string | Record<string, boolean>
  required?: boolean
  size?: FormElementSize
  type?: InputType
  validationStatus?: ValidationStatus
  wrapperClass?: string | Record<string, boolean>
}
