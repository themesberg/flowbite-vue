import type { InjectionKey, Ref } from 'vue'

import type { ValidationStatus } from '@/types/form'

export interface RadioProps {
  class?: string | Record<string, boolean>
  disabled?: boolean
  label?: string
  labelClass?: string | Record<string, boolean>
  name?: string
  value?: string
  wrapperClass?: string | Record<string, boolean>
}

export interface RadioGroupProps {
  label?: string
  legendClass?: string | Record<string, boolean>
  name: string
  validationStatus?: ValidationStatus
  wrapperClass?: string | Record<string, boolean>
}

export const radioGroupNameKey: InjectionKey<Ref<string>> = Symbol('radioGroupName')
export const radioGroupValidationStatusKey: InjectionKey<Ref<ValidationStatus | undefined>> = Symbol('radioGroupValidationStatus')
