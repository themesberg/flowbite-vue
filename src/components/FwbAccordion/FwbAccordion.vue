<template>
  <div
    :data-accordion-id="accordionId"
    :class="accordionClasses"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { nanoid } from 'nanoid'
import { computed } from 'vue'

import type { AccordionProps } from '@/components/FwbAccordion/types'

import { useAccordionState } from '@/components/FwbAccordion/composables/useAccordionState'
import { useMergeClasses } from '@/composables/useMergeClasses'

const accordionId = nanoid()

const props = withDefaults(
  defineProps<AccordionProps>(), {
    class: '',
    collapsed: false,
    flushed: false,
    persistent: false,
  },
)

const accordionDefaultClasses = 'w-full'
const userClasses = computed(() => props.class ?? '')

const accordionClasses = computed(() => useMergeClasses([
  accordionDefaultClasses,
  userClasses.value as string,
]))

useAccordionState(accordionId, { ...props })
</script>
