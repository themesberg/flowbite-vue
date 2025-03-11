import { twMerge } from 'tailwind-merge'
import { computed, type Ref, useAttrs } from 'vue'

import type { BadgeSize, BadgeType } from '../types'

const defaultBadgeClasses = 'mr-2 px-2.5 py-0.5 rounded flex items-center justify-center'
const badgeLinkClasses = 'bg-blue-100 hover:bg-blue-200 text-blue-800 dark:text-blue-800 dark:hover:bg-blue-300'
const onlyIconClasses = 'p-1 rounded-full mr-2'

const badgeTextClasses: Record<BadgeType, string> = {
  default: 'text-blue-800 dark:text-blue-300',
  dark: 'text-gray-800 dark:text-gray-300',
  red: 'text-red-800 dark:text-red-300',
  green: 'text-green-800 dark:text-green-300',
  yellow: 'text-yellow-800 dark:text-yellow-300',
  indigo: 'text-indigo-800 dark:text-indigo-300',
  purple: 'text-purple-800 dark:text-purple-300',
  pink: 'text-pink-800 dark:text-pink-300',
}

const badgeTypeClasses: Record<BadgeType, string> = {
  default: 'bg-blue-100 dark:bg-blue-900',
  dark: 'bg-gray-100 dark:bg-gray-700',
  red: 'bg-red-100 dark:bg-red-900',
  green: 'bg-green-100 dark:bg-green-900',
  yellow: 'bg-yellow-100 dark:bg-yellow-900',
  indigo: 'bg-indigo-100 dark:bg-indigo-900',
  purple: 'bg-purple-100 dark:bg-purple-900',
  pink: 'bg-pink-100 dark:bg-pink-900',
}

const badgeSizeClasses: Record<BadgeSize, string> = {
  xs: 'text-xs font-semibold',
  sm: 'text-sm font-medium',
}

export type UseBadgeClassesProps = {
  type: BadgeType
  size: BadgeSize
  href: string | null
}
export type UseBadgeClassesOptions = {
  isContentEmpty: Ref<boolean>
}

export function useBadgeClasses (
  props: UseBadgeClassesProps,
  options: UseBadgeClassesOptions,
): {
    badgeClasses: Ref<string>
  } {
  const attrs = useAttrs()
  const badgeClasses = computed<string>(() => {
    return twMerge(
      badgeSizeClasses[props.size],
      props.href ? '' : badgeTypeClasses[props.type],
      props.href ? '' : badgeTextClasses[props.type],
      props.href ? badgeLinkClasses : '',
      options.isContentEmpty.value ? onlyIconClasses : defaultBadgeClasses,
      attrs.class as string,
    )
  })
  return {
    badgeClasses,
  }
}
