import type { InputSize, ValidationStatus } from '../FwbInput/types'
import type { Component } from 'vue'

export type AutocompleteSize = InputSize
export type { ValidationStatus }

export interface AutocompleteProps<T = Record<string, unknown>> {
  modelValue?: T | null
  options: T[]
  loading?: boolean
  placeholder?: string
  disabled?: boolean
  valueField?: string
  searchFields?: string[]
  loadingText?: string
  noResultsText?: string
  minChars?: number
  remote?: boolean
  debounce?: number
  display?: string | ((option: T) => string)
  size?: AutocompleteSize
  validationStatus?: ValidationStatus
  class?: string | Record<string, boolean>
  wrapperClass?: string | Record<string, boolean>
  label?: string
  labelClass?: string | Record<string, boolean>
  dropdownClass?: string | Record<string, boolean>
  inputComponent?: Component
  inputProps?: Record<string, unknown>
  zIndex?: number
}

export interface AutocompleteEmits<T = Record<string, unknown>> {
  (e: 'update:modelValue', value: T | null): void
  (e: 'select', option: T): void
  (e: 'search', query: string): void
}
