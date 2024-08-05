<template>
  <div
    ref="panel"
    :data-panel-id="panelId"
  >
    <slot v-if="accordionId" />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { nanoid } from 'nanoid'
import { useAccordionState } from './composables/useAccordionState'

const { accordionsStates } = useAccordionState()

const panelId = nanoid()
const panel = ref()
const accordionId = computed(() => {
  if (panel.value) return panel.value.parentElement.dataset.accordionId
  return null
})

const accordionState = computed(() => {
  return accordionsStates[accordionId.value]
})

onMounted(() => {
  const panelIndex = Array.from(panel.value.parentElement.children).indexOf(panel.value)
  accordionState.value.panels[panelId] = {
    id: panelId,
    order: panelIndex,
    isVisible: (accordionState.value.openFirstItem && panelIndex === 0) ?? false,
  }
})
</script>
