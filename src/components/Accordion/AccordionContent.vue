<template>
  <div
    :class="{
      hidden: !panelState.isVisible,
      'border-b-0': panelState.order !== panelsCount - 1,
      'border-t-0': panelState.order === panelsCount - 1,
      'border-x-0': accordionState.flush,
    }"
    class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useAccordionState } from '@/components/Accordion/composables/useAccordionState'
import { computed, inject } from 'vue'

const accordionId: any = inject('accordionId')
const panelId: any = inject('panelId')


const { accordionsStates } = useAccordionState()

const accordionState = computed(() => accordionsStates[accordionId])
const panelState = computed(() => accordionsStates[accordionId].panels[panelId])
const panelsCount = computed(() => Object.keys(accordionsStates[accordionId].panels[panelId]).length)
</script>
