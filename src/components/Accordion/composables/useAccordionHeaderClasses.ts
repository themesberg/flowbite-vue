import { computed, inject } from 'vue'
import { useAccordionState } from '@/components/Accordion/composables/useAccordionState'
import classNames from 'classnames'


const baseHeaderClasses = 'flex items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
const baseArrowClasses = 'w-6 h-6 shrink-0'
export function useAccordionHeaderClasses() {
  const accordionId: string = inject('accordionId') ?? ''
  const panelId: string = inject('panelId') ?? ''

  const { accordionsStates } = useAccordionState()
  const accordionState = computed(() => accordionsStates[accordionId])
  const panelState = computed(() => accordionState.value.panels[panelId])
  const panelsCount = computed(() => Object.keys(panelState.value).length)
  const isPanelLast = computed(() => panelState.value.order !== panelsCount.value - 1)
  const isBottomBorderVisibleForFlush = computed(() =>
    isPanelLast.value ||
    (accordionState.value.flush && panelState.value.order === panelsCount.value - 1 && !panelState.value.isVisible))

  const headerClasses = computed(() => classNames(baseHeaderClasses, {
    'bg-gray-100 dark:bg-gray-800': panelState.value.isVisible,
    'rounded-t-xl': panelState.value.order === 0 && !accordionState.value.flush,
    'border-t-0': panelState.value.order === 0 && accordionState.value.flush,
    'border-b-0': isBottomBorderVisibleForFlush.value,
    'border-x-0': accordionState.value.flush,
  }))
  const arrowClasses = computed(() => classNames(baseArrowClasses,{ 'rotate-180': panelState.value.isVisible }))
  return {
    headerClasses,
    arrowClasses,
  }
}


