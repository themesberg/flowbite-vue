<template>
  <div :data-accordion-id="accordionId">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { nanoid } from 'nanoid'

import type { AccordionProps } from '@/components/FwbAccordion/types'

import { useAccordionState } from '@/components/FwbAccordion/composables/useAccordionState'

const accordionId = nanoid()

const props = withDefaults(
  defineProps<AccordionProps>(), {
    alwaysOpen: false,
    fullyCollapsed: false,
    flush: false,
  },
)

useAccordionState(accordionId, { ...props })
</script>
