<template>
  <div :data-accordion-id="accordionId">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { nanoid } from 'nanoid'
import { useAccordionState } from './composables/useAccordionState'

interface AccordionProps {
  alwaysOpen?: boolean
  openFirstItem?: boolean
  flush?: boolean
}

const props = withDefaults(defineProps<AccordionProps>(), {
  alwaysOpen: false,
  openFirstItem: true,
  flush: false,
})

const accordionId = nanoid()
useAccordionState(accordionId, { ...props })
</script>
