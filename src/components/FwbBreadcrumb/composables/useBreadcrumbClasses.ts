import classNames from 'classnames'
import { computed, type Ref } from 'vue'

import type { BreadcrumbType } from '../types'

const breadcrumbDefaultClasses = 'inline-flex items-center space-x-1 md:space-x-3'
const breadcrumbWrapperVariantClasses: Record<BreadcrumbType, string> = {
  default: 'flex',
  solid: 'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700',
}

export type useBreadcrumbProps = {
  solid: Ref<boolean>
}

export function useBreadcrumbClasses (props: useBreadcrumbProps): {
  breadcrumbClasses: Ref<string>
  breadcrumbWrapperClasses: Ref<string>
} {
  const breadcrumbClasses = computed<string>(() => classNames(breadcrumbDefaultClasses))
  const breadcrumbWrapperClasses = computed<string>(() => classNames(
    breadcrumbWrapperVariantClasses[props.solid.value ? 'solid' : 'defauilt' as BreadcrumbType],
  ))

  return {
    breadcrumbClasses,
    breadcrumbWrapperClasses,
  }
}
