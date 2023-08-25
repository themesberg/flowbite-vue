<template>
  <div :data-panel-id="panelId" ref="panel">
    <slot v-if="accordionId"></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useAccordionState } from '@/components/Accordion/composables/useAccordionState'
import { nanoid } from 'nanoid'

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
  const panelsCount = Object.keys(accordionState?.value?.panels)?.length
  accordionState.value.panels[panelId] = {
    id: panelId,
    order: panelsCount,
    isVisible: (accordionState.value.openFirstItem && panelsCount === 0) ?? false,
  }
})
</script>
