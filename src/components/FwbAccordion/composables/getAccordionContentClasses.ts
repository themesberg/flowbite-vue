import type { AccordionContentProps, AccordionPanel, AccordionState } from '../types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const baseContentClasses = 'p-5 border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'

export const getAccordionContentClasses = (
  accordionState: AccordionState,
  panelState: AccordionPanel,
  props: AccordionContentProps,
): string => {
  const isVisible = panelState.isVisible
  const isFlushed = accordionState.flushed
  const isLastPanel = panelState.order === accordionState.panels.length - 1

  return useMergeClasses(
    [
      baseContentClasses,
      isFlushed && 'border-x-0 border-t-0',
      !isVisible && 'hidden',
      (!isLastPanel && !isFlushed) && 'border-b-0',
      isLastPanel && 'border-t-0',
      props.class,
      isVisible ? props.activeClass : '',
    ].filter(str => (str))
      .join(' '),
  )
}
