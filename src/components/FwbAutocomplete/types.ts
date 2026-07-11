import type { FormElementSize, ValidationStatus } from '@/types/form'
import type { Component } from 'vue'

export type AutocompleteSize = FormElementSize
export type { ValidationStatus }

export interface AutocompleteProps<T = Record<string, any>> {
  class?: string | Record<string, boolean>
  debounce?: number
  inputClass?: string | Record<string, boolean>
  disabled?: boolean
  display?: string | ((option: T) => string)
  dropdownClass?: string | Record<string, boolean>
  inputComponent?: Component
  inputProps?: Record<string, any>
  label?: string
  labelClass?: string | Record<string, boolean>
  loading?: boolean
  loadingText?: string
  minChars?: number
  modelValue?: T | null
  noResultsText?: string
  options: T[]
  placeholder?: string
  remote?: boolean
  searchFields?: string[]
  size?: AutocompleteSize
  validationMessage?: string
  validationStatus?: ValidationStatus
  valueField?: string
  wrapperClass?: string | Record<string, boolean>
  zIndex?: number
}

export interface AutocompleteEmits<T = Record<string, any>> {
  (e: 'search', query: string): void
  (e: 'select', option: T): void
  (e: 'update:modelValue', value: T | null): void
}
