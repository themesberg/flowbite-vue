import { computed, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'

const defaultItemClasses = 'inline-flex items-center w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600'
const hoverItemClasses = 'block w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white'
const disabledItemClasses = 'bg-gray-100 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400'
const activeItemClasses = 'text-white bg-blue-700 dark:bg-gray-800 hover:text-white hover:bg-blue-700 hover:dark:bg-gray-800'

export type UseListGroupItemClassesProps = {
  hover: Ref<boolean>
  disabled: Ref<boolean>
  active: Ref<boolean>
}

export function useListGroupItemClasses (props: UseListGroupItemClassesProps): {
  itemClasses: Ref<string>
} {
  const itemClasses = computed(() => useMergeClasses([
    defaultItemClasses,
    props.disabled.value ? disabledItemClasses : '',
    !props.disabled.value && props.hover.value ? hoverItemClasses : '',
    !props.disabled.value && props.active.value ? activeItemClasses : '',
  ]))

  return {
    itemClasses,
  }
}
