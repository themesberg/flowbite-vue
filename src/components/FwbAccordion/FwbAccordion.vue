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
import { computed, provide, reactive } from 'vue'

import { ACCORDION_STATE_KEY } from './injection/config'

import type { AccordionProps, AccordionState } from './types'

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

provide(ACCORDION_STATE_KEY, reactive<AccordionState>({
  collapsed: props.collapsed,
  flushed: props.flushed,
  persistent: props.persistent,
  panels: [],
}))
</script>
