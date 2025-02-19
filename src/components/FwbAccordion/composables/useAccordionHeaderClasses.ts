import { computed, type Ref } from 'vue'

import type { AccordionHeaderProps, AccordionPanel, AccordionState } from '../types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const commonHeaderClasses = 'flex w-full items-center justify-between gap-3 font-medium p-5 text-gray-500 dark:text-gray-400 rtl:text-right'
const baseHeaderClasses = `${commonHeaderClasses} border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800`
const flushedHeaderClasses = `${commonHeaderClasses} border-b border-gray-200 dark:border-gray-700`

const defaultArrowClasses = 'ml-auto size-6 shrink-0'

interface AccordionHeaderClasses {
  arrowClasses: string
  headerClasses: string
}

export const useAccordionHeaderClasses = (
  accordionState: Ref<AccordionState | undefined>,
  panelState: Ref<AccordionPanel | null>,
  props: AccordionHeaderProps,
): AccordionHeaderClasses => {
  const arrowClasses = computed(() =>
    useMergeClasses([
      defaultArrowClasses,
      (panelState.value?.isVisible) ? 'rotate-180' : '',
    ]),
  )

  const userClass = computed(() => props.class)
  const userActiveClass = computed(() => props.activeClass)

  const panelsCount = computed(() => accordionState.value?.panels?.length ?? 0)
  const isFirstPanel = computed(() => panelState.value?.order === 0)
  const isLastPanel = computed(() => panelState.value?.order === panelsCount.value - 1)
  const isPanelVisible = computed(() => panelState.value?.isVisible)
  const isFlushed = computed(() => accordionState.value?.flushed)

  const headerClasses = computed(() =>
    useMergeClasses(
      [
        !isFlushed.value ? baseHeaderClasses : flushedHeaderClasses,
        isPanelVisible.value ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400',
        (isPanelVisible.value && !isFlushed.value) && 'bg-gray-100 dark:bg-gray-800',
        (isFirstPanel.value && !isFlushed.value) && 'rounded-t-xl',
        (isFirstPanel.value && isFlushed.value) && 'border-t-0',
        !isLastPanel.value && 'border-b-0',
        isFlushed.value && 'border-x-0 border-b',
        userClass.value,
        isPanelVisible.value ? userActiveClass.value : '',
      ].filter(str => (str))
        .join(' '),
    ),
  )

  return {
    arrowClasses: arrowClasses.value,
    headerClasses: headerClasses.value,
  }
}
