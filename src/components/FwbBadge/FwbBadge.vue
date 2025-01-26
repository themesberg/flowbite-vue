<template>
  <component
    :is="wrapperType"
    :class="badgeClasses"
    :href="href"
  >
    <slot name="icon" />
    <slot name="default" />
  </component>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'

import { useBadgeClasses } from './composables/useBadgeClasses'

import type { BadgeSize, BadgeType } from './types'

interface IBadgeProps {
  type?: BadgeType
  size?: BadgeSize
  href?: string | null
}
const props = withDefaults(defineProps<IBadgeProps>(), {
  type: 'default',
  size: 'xs',
  href: null,
})

const slots = useSlots()
const isContentEmpty = computed(() => !slots.default)
const wrapperType = computed(() => (props.href ? 'a' : 'span'))

const { badgeClasses } = useBadgeClasses(props, { isContentEmpty })
</script>
