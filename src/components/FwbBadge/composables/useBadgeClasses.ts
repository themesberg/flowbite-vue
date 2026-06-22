import { computed, type Ref, useAttrs } from 'vue'

import type { BadgeSize, BadgeType } from '../types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const defaultBadgeClasses = 'mr-2 px-2.5 py-0.5 rounded flex items-center justify-center'
const pillBadgeClasses = 'rounded-full'
const onlyIconClasses = 'p-1 rounded-full mr-2'

const badgeLinkClasses = 'bg-blue-100 hover:bg-blue-200 text-blue-800 dark:text-blue-800 dark:hover:bg-blue-300'

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

const badgeSizeClasses: Record<BadgeSize, string> = {
  xs: 'text-xs font-semibold',
  sm: 'text-sm font-medium',
}

const badgeBorderTypeClasses: Record<BadgeType, string> = {
  default: 'bg-blue-100 dark:bg-gray-700 border border-blue-400 dark:border-blue-400',
  dark: 'bg-gray-100 dark:bg-gray-700 border border-gray-500 dark:border-gray-400',
  red: 'bg-red-100 dark:bg-gray-700 border border-red-400 dark:border-red-400',
  green: 'bg-green-100 dark:bg-gray-700 border border-green-400 dark:border-green-400',
  yellow: 'bg-yellow-100 dark:bg-gray-700 border border-yellow-400 dark:border-yellow-400',
  indigo: 'bg-indigo-100 dark:bg-gray-700 border border-indigo-400 dark:border-indigo-400',
  purple: 'bg-purple-100 dark:bg-gray-700 border border-purple-400 dark:border-purple-400',
  pink: 'bg-pink-100 dark:bg-gray-700 border border-pink-400 dark:border-pink-400',
}

const badgeBorderTextClasses: Record<BadgeType, string> = {
  default: 'text-blue-800 dark:text-blue-400',
  dark: 'text-gray-800 dark:text-gray-400',
  red: 'text-red-800 dark:text-red-400',
  green: 'text-green-800 dark:text-green-400',
  yellow: 'text-yellow-800 dark:text-yellow-400',
  indigo: 'text-indigo-800 dark:text-indigo-400',
  purple: 'text-purple-800 dark:text-purple-400',
  pink: 'text-pink-800 dark:text-pink-400',
}

const badgeDismissButtonClasses: Record<BadgeType, string> = {
  default: 'text-blue-400 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300',
  dark: 'text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300',
  red: 'text-red-400 hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300',
  green: 'text-green-400 hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300',
  yellow: 'text-yellow-400 hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300',
  indigo: 'text-indigo-400 hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300',
  purple: 'text-purple-400 hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300',
  pink: 'text-pink-400 hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300',
}

export type UseBadgeClassesProps = {
  type: BadgeType
  size: BadgeSize
  href: string | null
  pill: boolean
  border: boolean
  dismissible: boolean
}
export type UseBadgeClassesOptions = {
  isContentEmpty: Ref<boolean>
}

export function useBadgeClasses (
  props: UseBadgeClassesProps,
  options: UseBadgeClassesOptions,
): {
    badgeClasses: Ref<string>
    dismissButtonClass: Ref<string>
  } {
  const attrs = useAttrs()

  const badgeClasses = computed<string>(() => {
    if (options.isContentEmpty.value) {
      return useMergeClasses([
        onlyIconClasses,
        props.border ? badgeBorderTypeClasses[props.type] : (props.href ? badgeLinkClasses : badgeTypeClasses[props.type]),
        props.border ? badgeBorderTextClasses[props.type] : (props.href ? '' : badgeTextClasses[props.type]),
        attrs.class as string,
      ])
    }

    if (props.href) {
      return useMergeClasses([
        defaultBadgeClasses,
        props.pill ? pillBadgeClasses : '',
        props.dismissible ? 'pr-1' : '',
        badgeSizeClasses[props.size],
        props.border ? badgeBorderTypeClasses[props.type] : badgeLinkClasses,
        props.border ? badgeBorderTextClasses[props.type] : '',
        attrs.class as string,
      ])
    }

    return useMergeClasses([
      defaultBadgeClasses,
      props.pill ? pillBadgeClasses : '',
      props.dismissible ? 'pr-1' : '',
      badgeSizeClasses[props.size],
      props.border ? badgeBorderTypeClasses[props.type] : badgeTypeClasses[props.type],
      props.border ? badgeBorderTextClasses[props.type] : badgeTextClasses[props.type],
      attrs.class as string,
    ])
  })

  const dismissButtonClass = computed<string>(() =>
    useMergeClasses([
      'inline-flex items-center p-1 ms-2 rounded-sm bg-transparent',
      badgeDismissButtonClasses[props.type],
    ]),
  )

  return { badgeClasses, dismissButtonClass }
}
