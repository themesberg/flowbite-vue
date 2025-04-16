import { twMerge } from 'tailwind-merge'

import type { ClassInput } from '@/types/global'

function normalizeClasses (input: ClassInput): string {
  if (typeof input === 'string') {
    return input.trim()
  }

  if (Array.isArray(input)) {
    return input
      .map(normalizeClasses)
      .join(' ')
      .trim()
  }

  if (typeof input === 'object' && input !== null) {
    return Object.entries(input)
      .filter(([_, value]) => value)
      .map(([key]) => key)
      .join(' ')
  }

  return ''
}

export const useMergeClasses = (componentClasses: ClassInput): string => {
  return twMerge(normalizeClasses(componentClasses))
}
