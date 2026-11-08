import { computed } from 'vue'

import type { AccordionContentProps, AccordionPanel, AccordionState } from '../types'

import { useMergeClasses } from '@/composables/useMergeClasses'

export const useAccordionContentClasses = (
  accordionState: AccordionState,
  panelState: AccordionPanel,
  props: AccordionContentProps,
): string => {
  const baseContentClasses = 'p-5 border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'

  const userClass = computed(() => props.class)
  const userActiveClass = computed(() => props.activeClass)

  const isFlushed = computed(() => accordionState.flushed)
  const isPanelVisible = computed(() => panelState.isVisible)
  const panelsCount = computed(() => accordionState.panels.length)
  const isLastPanel = computed(() => panelState.order === panelsCount.value - 1)

  const contentClasses = computed(() =>
    useMergeClasses(
      [
        baseContentClasses,
        isFlushed.value && 'border-x-0 border-t-0',
        !isPanelVisible.value && 'hidden',
        (!isLastPanel.value && !isFlushed.value) && 'border-b-0',
        isLastPanel.value && 'border-t-0',
        userClass.value,
        isPanelVisible.value ? userActiveClass.value : '',
      ].filter(str => (str))
        .join(' '),
    ),
  )

  return contentClasses.value
}
