export type InputSize = 'sm' | 'md' | 'lg'

export type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'

// A simplified version of AutFill, which is to complex for TypeScript to handle
export type CommonAutoFill = 'on' | 'off' | 'email' | 'tel' | 'name' | 'username' | 'current-password' | 'country' | 'postal-code' | 'language' | 'bday'

export interface InputProps {
  autocomplete?: CommonAutoFill
  class?: string | Record<string, boolean>
  disabled?: boolean
  inputClass?: string | Record<string, boolean>
  label?: string
  labelClass?: string | Record<string, boolean>
  required?: boolean
  size?: InputSize
  type?: InputType
  validationStatus?: ValidationStatus
  wrapperClass?: string | Record<string, boolean>
}

export const validationStatusMap = {
  Error: 'error',
  Success: 'success',
} as const

export type ValidationStatus = typeof validationStatusMap[keyof typeof validationStatusMap]
