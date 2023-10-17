import { computed, type Ref } from 'vue'
import classNames from 'classnames'

const breadcrumbItemDefaultClasses = 'ml-1 inline-flex items-center text-sm font-medium dark:text-gray-400'
const breadcrumbItemLinkClasses = 'text-gray-700 hover:text-gray-900 dark:hover:text-white'
const breadcrumbSpanClasses = 'text-gray-500'

export type useBreadcrumbItemProps = {
  href: Ref<string>
  home: Ref<boolean>
}

export function useBreadcrumbItemClasses (props: useBreadcrumbItemProps): {
  breadcrumbItemClasses: Ref<string>
} {
  const breadcrumbItemClasses = computed<string>(() => classNames(
    breadcrumbItemDefaultClasses,
    props.href.value ? breadcrumbItemLinkClasses : breadcrumbSpanClasses,
  ))

  return {
    breadcrumbItemClasses,
  }
}
