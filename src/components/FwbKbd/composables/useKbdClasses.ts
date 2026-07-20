import { computed, type Ref, useAttrs } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'

const defaultKbdClasses = 'rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100'
const iconKbdClasses = 'inline-flex items-center'

export type UseKbdClassesOptions = {
  hasIcon: Ref<boolean>
}

export function useKbdClasses (options: UseKbdClassesOptions): {
  kbdClasses: Ref<string>
} {
  const attrs = useAttrs()

  const kbdClasses = computed<string>(() =>
    useMergeClasses([
      defaultKbdClasses,
      options.hasIcon.value ? iconKbdClasses : '',
      attrs.class as string,
    ]),
  )

  return { kbdClasses }
}
