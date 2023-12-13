import { twMerge } from 'tailwind-merge'

export const useMergeClasses = (componentClasses: string | string[]): string =>
  twMerge(componentClasses)
