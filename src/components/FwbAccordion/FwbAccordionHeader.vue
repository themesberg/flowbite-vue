<template>
  <div ref="header">
    <button
      v-if="isLoaded"
      type="button"
      :class="headerClasses"
      @click="toggleItem"
    >
      <span class="w-full"><slot /></span>
      <svg
        data-accordion-icon
        :class="arrowClasses"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, type ComputedRef, onMounted, ref } from 'vue'
import { useAccordionState } from './composables/useAccordionState'
import { useAccordionHeaderClasses } from './composables/useAccordionHeaderClasses'

const isLoaded = ref(false)
const header = ref()
const accordionId = computed(() => header.value.parentElement.parentElement.dataset.accordionId)
const panelId = computed(() => header.value.parentElement.dataset.panelId)

const { accordionsStates } = useAccordionState()
const accordionState = computed(() => accordionsStates[accordionId.value])
const panelState = computed(() => accordionState.value.panels[panelId.value])

let headerClasses: ComputedRef, arrowClasses: ComputedRef
function commonToggleItem () {
  const isSelectedVisible = panelState.value.isVisible
  for (const panelIndex in accordionState.value.panels) {
    const panel = accordionState.value.panels[panelIndex]
    if (panel.id !== panelId.value) panel.isVisible = false
    else panel.isVisible = !isSelectedVisible
  }
}
function alwaysOpenToggleItem () {
  panelState.value.isVisible = !panelState.value.isVisible
}
function toggleItem () {
  if (accordionState.value.alwaysOpen) return alwaysOpenToggleItem()
  commonToggleItem()
}

onMounted(() => {
  const accordionHeaderClasses = useAccordionHeaderClasses(header)
  headerClasses = accordionHeaderClasses.headerClasses
  arrowClasses = accordionHeaderClasses.arrowClasses
  isLoaded.value = true
})
</script>
