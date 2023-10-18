import { computed, type Ref } from 'vue'
import classNames from 'classnames'

const defaultContainerClasses = 'overflow-hidden w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'

export function useListGroupClasses (): {
  containerClasses: Ref<string>,
  } {
  const containerClasses = computed<string>(() => {
    return classNames(
      defaultContainerClasses,
    )
  })

  return {
    containerClasses,
  }
}
