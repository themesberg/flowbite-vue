<template>
  <component
    :is="tag"
    :class="simplifyTailwindClasses(classAttr, classes)"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, type PropType, toRefs, useAttrs } from 'vue'

import { useFlowbiteThemableChildClasses } from './composables/useFlowbiteThemableChildClasses'

import type { FlowbiteTheme, ThemableChildrenApply } from '@/components/utils/FlowbiteThemable/types'

import { simplifyTailwindClasses } from '@/utils/simplifyTailwindClasses'

const attrs = useAttrs()

const props = defineProps({
  apply: {
    type: Array as PropType<ThemableChildrenApply[]>,
    required: true,
  },
  tag: {
    type: String,
    default: 'div',
  },
  theme: {
    type: String as PropType<FlowbiteTheme>,
    default: undefined,
  },
})

const { classes } = useFlowbiteThemableChildClasses(toRefs(props))

const classAttr = computed<string>(() => attrs.class as string || '')
</script>
