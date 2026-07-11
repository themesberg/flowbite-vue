import type { ColorVariant } from '@/types/colors'

export type ProgressValuePosition = 'inside' | 'outside' | 'none'
export type ProgressSize = 'sm' | 'md' | 'lg' | 'xl'
export type ProgressColorVariant = Exclude<ColorVariant, 'alternative' | 'light'>
