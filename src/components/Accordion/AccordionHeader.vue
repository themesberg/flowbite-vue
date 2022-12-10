<template>
  <button
      type="button"
      @click="toggleItem"
      :class="{
        'rounded-t-xl': panelState.order === 0,
        'border-b-0': panelState.order !== panelsCount - 1,
        }"
      class="flex items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    <span class="w-full"><slot /></span>
    <svg
        data-accordion-icon
        class="w-6 h-6 shrink-0"
        :class="{'rotate-180': panelState.isVisible}"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
    </svg>
  </button>
</template>

<script lang="ts" setup>
import { useAccordionState } from '@/components/Accordion/composables/useAccordionState'
import { computed, inject } from 'vue'


const accordionId: any = inject('accordionId')
const panelId: any = inject('panelId')

const accordionState = computed(() => {
  return accordionsStates[accordionId]
})
const panelsCount = computed(() => Object.keys(accordionsStates[accordionId].panels[panelId]).length)

const commonToggleItem = () => {
  const selectedPanel = accordionState.value.panels[panelId]
  const isSelectedVisible = selectedPanel.isVisible
  for (const panelIndex in accordionState.value.panels) {
    const panel = accordionState.value.panels[panelIndex]
    if (panel.id !== panelId) panel.isVisible = false
    else panel.isVisible = !isSelectedVisible
  }
}
const alwaysOpenToggleItem = () => {
  const selectedPanel = accordionState.value.panels[panelId]
  selectedPanel.isVisible = !selectedPanel.isVisible
}
const flushToggleItem = () => {
  const selectedPanel = accordionState.value.panels[panelId]
  if (selectedPanel.isVisible) return
  commonToggleItem()
}
const toggleItem = () => {
  const actionsMap = {
    flush: flushToggleItem,
    alwaysOpen: alwaysOpenToggleItem,
    default: commonToggleItem,
  }
  actionsMap[accordionState.value.mode]()
}

const { accordionsStates } = useAccordionState()
const panelState = computed(() => accordionsStates[accordionId].panels[panelId])
</script>
