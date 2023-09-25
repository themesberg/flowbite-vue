import type { BadgeType, BadgeSize } from '../types'
import { computed } from 'vue'
import type { Ref } from 'vue'
import classNames from 'classnames'

const defaultBadgeClasses = 'mr-2 px-2.5 py-0.5 rounded flex items-center justify-center'
const badgeLinkClasses = 'bg-blue-100 hover:bg-blue-200 text-blue-800 dark:text-blue-800 dark:hover:bg-blue-300'
const onlyIconClasses = 'p-1 rounded-full mr-2'

const badgeTextClasses: Record<BadgeType, string> = {
    default: 'text-blue-800 dark:text-blue-800',
    dark: 'text-gray-800 dark:bg-gray-700',
    red: 'text-red-800 dark:text-red-900',
    green: 'text-green-800 dark:text-green-900',
    yellow: 'text-yellow-800 dark:text-yellow-900',
    indigo: 'text-indigo-800 dark:text-indigo-900',
    purple: 'text-purple-800 dark:text-purple-900',
    pink: 'text-pink-800 dark:text-pink-900',
}

const badgeTypeClasses: Record<BadgeType, string> = {
    default: 'bg-blue-100 dark:bg-blue-200',
    dark: 'bg-gray-100 dark:bg-gray-700',
    red: 'bg-red-100 dark:bg-red-200',
    green: 'bg-green-100 dark:bg-green-200',
    yellow: 'bg-yellow-100 dark:bg-yellow-200',
    indigo: 'bg-indigo-100 dark:bg-indigo-200',
    purple: 'bg-purple-100 dark:bg-purple-200',
    pink: 'bg-pink-100 dark:bg-pink-200',
}

const badgeSizeClasses: Record<BadgeSize, string> = {
    xs: 'text-xs font-semibold',
    sm: 'text-sm font-medium',
}

export type UseBadgeClassesProps = {
    type: Ref<BadgeType>
    size: Ref<BadgeSize>
    href: Ref<string>
    customBgColor?: Ref<string>
    customTextColor?: Ref<string>
}
export type UseBadgeClassesOptions = {
    isContentEmpty: Ref<boolean>
}

export function useBadgeClasses(props: UseBadgeClassesProps, options: UseBadgeClassesOptions): {
    badgeClasses: Ref<string>
} {
    const bgColor = props.customBgColor?.value || badgeTypeClasses[props.type.value];
    const textColor = props.customTextColor?.value || badgeTextClasses[props.type.value];
    
    const badgeClasses = computed<string>(() => {
        return classNames(
            badgeSizeClasses[props.size.value],
            props.href.value ? '' : badgeTypeClasses[props.type.value],
            props.href.value ? '' : badgeTextClasses[props.type.value],
            props.href.value ? badgeLinkClasses : '',
            options.isContentEmpty.value ? onlyIconClasses : defaultBadgeClasses,
        )
    })
    return {
        badgeClasses,
    }
}
