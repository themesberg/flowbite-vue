import { computed, type Ref } from 'vue'
import { useAccordionState } from './useAccordionState'
import { twMerge } from 'tailwind-merge'

const baseHeaderClasses = 'flex items-center p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700'
const nonFlushHeaderClasses = 'hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800'

const baseArrowClasses = 'w-6 h-6 shrink-0'

export function useAccordionHeaderClasses (headerRef: Ref) {
  const accordionId = computed(() => headerRef.value.parentElement.parentElement.dataset.accordionId)
  const panelId = computed(() => headerRef.value.parentElement.dataset.panelId)
  const { accordionsStates } = useAccordionState()
  const accordionState = computed(() => accordionsStates[accordionId.value])
  const panelState = computed(() => accordionState.value.panels[panelId.value])
  const panelsCount = computed(() => Object.keys(accordionState.value.panels).length)
  const isFirstPanel = computed(() => panelState.value.order === 0)
  const isLastPanel = computed(() => panelState.value.order === panelsCount.value - 1)

  const headerClasses = computed(() => {
    return twMerge(
      baseHeaderClasses,
      panelState.value.isVisible ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400',
      panelState.value.isVisible && !accordionState.value.flush && 'bg-gray-100 dark:bg-gray-800',
      isFirstPanel.value && !accordionState.value.flush && 'rounded-t-xl',
      isFirstPanel.value && accordionState.value.flush && 'border-t-0',
      accordionState.value.flush ? 'border-x-0' : nonFlushHeaderClasses,
      !isLastPanel.value && 'border-b-0',
    )
  })
  const arrowClasses = computed(() => {
    return twMerge(baseArrowClasses, panelState.value.isVisible && 'rotate-180')
  })
  return {
    headerClasses,
    arrowClasses,
  }
}
