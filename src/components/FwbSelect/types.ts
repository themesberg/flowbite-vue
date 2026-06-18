import type { Autocomplete, FormElementSize, ValidationStatus } from '@/types/form'

export type { ValidationStatus }
export { validationStatusMap } from '@/types/form'

export type OptionsType = {
  name: string
  value: string
}

export interface SelectProps {
  autocomplete?: Autocomplete
  chevronClass?: string | Record<string, boolean>
  class?: string | Record<string, boolean>
  clearable?: boolean
  disabled?: boolean
  label?: string
  labelClass?: string | Record<string, boolean>
  options?: OptionsType[]
  placeholder?: string
  required?: boolean
  size?: FormElementSize
  underline?: boolean
  validationStatus?: ValidationStatus
  wrapperClass?: string | Record<string, boolean>
}
