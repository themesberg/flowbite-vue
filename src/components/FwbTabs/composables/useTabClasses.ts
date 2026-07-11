import { computed, type Ref, unref } from 'vue'

import { useFlowbiteThemable } from '../../utils/FlowbiteThemable/composables/useFlowbiteThemable'

import type { TabsVariant } from './../types'

import { useMergeClasses } from '@/composables/useMergeClasses'

export type TabClassMap = {
  active: string
  default: string
  disabled: string
}

export type UseTabClassesProps = {
  active: Ref<boolean>
  disabled: Ref<boolean>
  variant?: Ref<TabsVariant>
  itemClass?: Ref<string>
  itemActiveClass?: Ref<string>
  vertical?: Ref<boolean>
  fullWidth?: Ref<boolean>
}

const defaultTabClasses: TabClassMap = {
  default: 'cursor-pointer inline-flex items-center gap-2 p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300',
  active: 'cursor-pointer inline-flex items-center gap-2 p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500',
  disabled: 'inline-flex items-center gap-2 p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500',
}
const underlineTabClasses: TabClassMap = {
  default: 'cursor-pointer inline-flex items-center gap-2 p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
  active: 'cursor-pointer inline-flex items-center gap-2 p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500',
  disabled: 'inline-flex items-center gap-2 p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500',
}
const pillsTabClasses: TabClassMap = {
  default: 'cursor-pointer inline-flex items-center gap-2 py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
  active: 'cursor-pointer inline-flex items-center gap-2 py-3 px-4 text-white bg-blue-600 rounded-lg active',
  disabled: 'inline-flex items-center gap-2 py-3 px-4 text-gray-400 cursor-not-allowed dark:text-gray-500',
}

const verticalDefaultTabClasses: TabClassMap = {
  default: 'cursor-pointer flex items-center gap-2 w-full text-left p-4 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300',
  active: 'cursor-pointer flex items-center gap-2 w-full text-left p-4 text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500',
  disabled: 'flex items-center gap-2 w-full text-left p-4 text-gray-400 cursor-not-allowed dark:text-gray-500',
}
const verticalUnderlineTabClasses: TabClassMap = {
  default: 'cursor-pointer flex items-center gap-2 w-full text-left p-4 border-r-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
  active: 'cursor-pointer flex items-center gap-2 w-full text-left p-4 text-blue-600 border-r-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500',
  disabled: 'flex items-center gap-2 w-full text-left p-4 text-gray-400 cursor-not-allowed dark:text-gray-500',
}
const verticalPillsTabClasses: TabClassMap = {
  default: 'cursor-pointer flex items-center gap-2 w-full text-left py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
  active: 'cursor-pointer flex items-center gap-2 w-full text-left py-3 px-4 text-white bg-blue-600 rounded-lg active',
  disabled: 'flex items-center gap-2 w-full text-left py-3 px-4 text-gray-400 cursor-not-allowed dark:text-gray-500',
}

export function useTabClasses (props: UseTabClassesProps): {
  tabClasses: Ref<string>
} {
  const theme = useFlowbiteThemable()

  const tabClasses = computed(() => {
    const isActiveTheme = theme.isActive.value
    const extraClass = props.itemClass?.value ?? ''
    const variant = unref(props.variant) ?? 'default'
    const isVertical = props.vertical?.value ?? false
    const isFullWidth = (props.fullWidth?.value ?? false) && !isVertical

    const tabClassType: keyof TabClassMap = props.active.value
      ? 'active'
      : props.disabled.value
        ? 'disabled'
        : 'default'

    const activeExtraClass = tabClassType === 'active' ? (props.itemActiveClass?.value ?? '') : ''

    const fullWidthClass = isFullWidth ? 'inline-flex items-center justify-center w-full' : ''

    if (variant === 'default') {
      const base = isVertical ? verticalDefaultTabClasses : defaultTabClasses
      return useMergeClasses([
        base[tabClassType],
        (isActiveTheme && tabClassType === 'active')
          ? theme.textClasses.value
          : '',
        extraClass,
        activeExtraClass,
        fullWidthClass,
      ])
    } else if (variant === 'underline') {
      const base = isVertical ? verticalUnderlineTabClasses : underlineTabClasses
      return useMergeClasses([
        base[tabClassType],
        (isActiveTheme && tabClassType === 'active')
          ? `${theme.borderClasses.value} ${theme.textClasses.value}`
          : '',
        extraClass,
        activeExtraClass,
        fullWidthClass,
      ])
    } else if (variant === 'pills') {
      const base = isVertical ? verticalPillsTabClasses : pillsTabClasses
      return useMergeClasses([
        base[tabClassType],
        (isActiveTheme && tabClassType === 'active')
          ? `${theme.backgroundClasses.value} text-white`
          : '',
        extraClass,
        activeExtraClass,
        fullWidthClass,
      ])
    }

    return ''
  })

  return { tabClasses }
}
