import type { AccordionPanelProps } from '../types'

import { useMergeClasses } from '@/composables/useMergeClasses'

interface UseAccordionClassesProps {
  isVisible: boolean
  props: AccordionPanelProps
}

const useAccordionPanelClasses = ({ props, isVisible }: UseAccordionClassesProps) => {
  const userActiveClasses = props.activeClass ?? ''

  return useMergeClasses([`${isVisible ? userActiveClasses : ''}`])
}

export {
  useAccordionPanelClasses,
}
