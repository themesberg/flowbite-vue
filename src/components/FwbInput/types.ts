export type InputSize = 'sm' | 'md' | 'lg'

export type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'

export const validationStatusMap = {
  Success: 'success',
  Error: 'error',
} as const

export type ValidationStatus = typeof validationStatusMap[keyof typeof validationStatusMap]
