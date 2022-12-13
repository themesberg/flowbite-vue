import { computed, inject } from 'vue'
import { useAccordionState } from '@/components/Accordion/composables/useAccordionState'
import classNames from 'classnames'


const baseContentClasses = 'p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900'
export function useAccordionContentClasses() {
  const accordionId: string = inject('accordionId') ?? ''
  const panelId: string = inject('panelId') ?? ''


  const { accordionsStates } = useAccordionState()

  const accordionState = computed(() => accordionsStates[accordionId])
  const panelState = computed(() => accordionsStates[accordionId].panels[panelId])
  const panelsCount = computed(() => Object.keys(accordionsStates[accordionId].panels[panelId]).length)

  const contentClasses = computed(() => classNames(baseContentClasses, {
    hidden: !panelState.value.isVisible,
    'border-b-0': panelState.value.order !== panelsCount.value - 1 || accordionState.value.flush,
    'border-t-0': panelState.value.order === panelsCount.value - 1,
    'border-x-0': accordionState.value.flush,
  }))
  return {
    contentClasses,
  }
}


