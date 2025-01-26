import { inject } from 'vue'

import { FLOWBITE_TOAST_INJECTION_KEY } from '../injection/config'

import type { ToastItem, UseToastInjection } from '../types'

export function useToast (): UseToastInjection {
  const injection = inject<UseToastInjection | null>(FLOWBITE_TOAST_INJECTION_KEY, null)
  if (injection === null) console.warn('Cannot use useToast outside <toast-provider> component. Please wrap your component with <toast-provider>')

  const add = (toast: ToastItem): string => {
    if (!injection) {
      return ''
    }

    return injection?.add(toast)
  }

  const remove = (id: string): boolean => {
    if (!injection) {
      return false
    }

    return injection?.remove(id)
  }

  const pop = (): string => {
    if (!injection) {
      return ''
    }

    return injection?.pop()
  }

  return {
    add,
    remove,
    pop,
  }
}
