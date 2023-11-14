import { twMerge } from 'tailwind-merge'

export const useMergeClasses = (componentClassesArray: string[] = []): string =>
  twMerge(componentClassesArray.join(' '))
