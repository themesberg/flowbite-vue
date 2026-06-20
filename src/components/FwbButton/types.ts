export type ButtonMonochromeGradient = 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple'
export type ButtonDuotoneGradient = 'purple-blue' | 'cyan-blue' | 'green-blue' | 'purple-pink' | 'pink-orange' | 'teal-lime' | 'red-yellow'
export type ButtonGradient = ButtonDuotoneGradient | ButtonMonochromeGradient
export type ButtonVariant = 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' | 'blue'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps {
  class?: string | Record<string, boolean>
  color?: ButtonVariant
  disabled?: boolean
  gradient?: ButtonGradient | null
  href?: string
  loading?: boolean
  loadingPosition?: 'prefix' | 'suffix'
  outline?: boolean
  pill?: boolean
  shadow?: ButtonMonochromeGradient | boolean
  size?: ButtonSize
  square?: boolean
  tag?: string
  to?: string | object
}
