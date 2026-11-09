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
  accordionState: AccordionState,
  panelState: AccordionPanel,
  props: AccordionHeaderProps,
): AccordionHeaderClasses => {
  const isVisible = panelState.isVisible
  const isFlushed = accordionState.flushed
  const isFirstPanel = panelState.order === 0
  const isLastPanel = panelState.order === accordionState.panels.length - 1

  return {
    arrowClasses: useMergeClasses([
      defaultArrowClasses,
      isVisible ? 'rotate-180' : '',
    ]),
    headerClasses: useMergeClasses(
      [
        !isFlushed ? baseHeaderClasses : flushedHeaderClasses,
        isVisible ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400',
        (isVisible && !isFlushed) && 'bg-gray-100 dark:bg-gray-800',
        (isFirstPanel && !isFlushed) && 'rounded-t-xl',
        (isFirstPanel && isFlushed) && 'border-t-0',
        !isLastPanel && 'border-b-0',
        isFlushed && 'border-x-0 border-b',
        props.class,
        isVisible ? props.activeClass : '',
      ].filter(str => (str))
        .join(' '),
    ),
  }
}
