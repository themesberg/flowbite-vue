<template>
  <div>
    <slot name="header" @click="toggleItem"/>
    <slot name="content"/>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, onBeforeMount, provide } from 'vue'
import { useAccordionState } from '@/components/Accordion/composables/useAccordionState'
import { nanoid } from 'nanoid'

const { accordionsStates } = useAccordionState()

const panelId = nanoid()
const accordionId: any = inject('accordionId')
provide('panelId', panelId)

const accordionState = computed(() => {
  return accordionsStates[accordionId]
})

onBeforeMount(() => {
  const panelsCount = Object.keys(accordionState.value.panels).length
  accordionState.value.panels[panelId] = {
    id: panelId,
    order: panelsCount,
    isVisible: !panelsCount,
  }
})
</script>
