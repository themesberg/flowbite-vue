import { computed, type Ref } from 'vue'

import type { TabsVariant } from '../types'

import { useMergeClasses } from '@/composables/useMergeClasses'

export type UseTabsClassesProps = {
  variant: TabsVariant
  tabClass?: string
  vertical?: boolean
}

export function useTabsClasses (props: UseTabsClassesProps): {
  tabClasses: Ref<string>
} {
  const tabClasses = computed(() => {
    if (props.vertical) {
      return useMergeClasses([
        'flex flex-col text-sm font-medium text-gray-500 dark:text-gray-400',
        props.variant === 'default' || props.variant === 'underline'
          ? 'border-r border-gray-200 dark:border-gray-700'
          : '',
        props.variant === 'underline' ? '-mr-px' : '',
        props.tabClass ?? '',
      ])
    }
    return useMergeClasses([
      'flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400',
      props.variant === 'default' || props.variant === 'underline'
        ? 'border-b border-gray-200 dark:border-gray-700'
        : '',
      props.variant === 'underline' ? '-mb-px' : '',
      props.tabClass ?? '',
    ])
  })

  return { tabClasses }
}
