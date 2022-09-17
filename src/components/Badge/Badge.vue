<template>
  <component :is="wrapperType" :class="badgeClasses" :href="href">
    <slot name="icon"/>
    <slot name="default" />
  </component>
</template>
<script lang="ts" setup>
import { computed, toRefs, useSlots } from 'vue'
import type { PropType } from 'vue'
import type { BadgeType, BadgeSize } from './types'
import { useBadgeClasses } from '@/components/Badge/composables/useBadgeClasses'

const props = defineProps({
  type: {
    type: String as PropType<BadgeType>,
    default: 'default',
  },
  size: {
    type: String as PropType<BadgeSize>,
    default: 'xs',
  },
  href: {
    type: String,
    default: null,
  },
})

const slots = useSlots()
const isContentEmpty = computed(() => !slots.default)
const wrapperType = computed(() => props.href ? 'a' : 'span')

const { badgeClasses } = useBadgeClasses(toRefs(props), { isContentEmpty })
</script>
