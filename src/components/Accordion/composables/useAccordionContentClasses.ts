import { computed } from 'vue'
import { useAccordionState } from '@/components/Accordion/composables/useAccordionState'
import classNames from 'classnames'

const baseContentClasses = 'p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900'
export function useAccordionContentClasses(contentRef: any) {
  const accordionId = computed(() => contentRef.value.parentElement.parentElement.dataset.accordionId)
  const panelId = computed(() => contentRef.value.parentElement.dataset.panelId)
  const { accordionsStates } = useAccordionState()
  const accordionState = computed(() => accordionsStates[accordionId.value])
  const panelState = computed(() => accordionsStates[accordionId.value].panels[panelId.value])
  const panelsCount = computed(() => Object.keys(accordionsStates[accordionId.value].panels[panelId.value]).length)

  const contentClasses = computed(() => {
    return classNames(baseContentClasses, {
      hidden: !panelState.value.isVisible,
      'border-b-0': panelState.value.order !== panelsCount.value - 1 || accordionState.value.flush,
      'border-t-0': panelState.value.order === panelsCount.value - 1,
      'border-x-0': accordionState.value.flush,
    })
  })
  return {
    contentClasses,
  }
}
