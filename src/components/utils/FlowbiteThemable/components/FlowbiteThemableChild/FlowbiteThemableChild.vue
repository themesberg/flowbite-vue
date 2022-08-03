<template>
  <component :is="tag" :class="simplifyTailwindClasses(classAttr, classes)">
    <slot />
  </component>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import {
  useFlowbiteThemableChildClasses,
} from './composables/useFlowbiteThemableChildClasses'
import type {
  ThemableChildrenApply,
} from '@/components/utils/FlowbiteThemable/components/FlowbiteThemableChild/types'
import { computed, toRefs, useAttrs } from 'vue'
import { simplifyTailwindClasses } from '@/utils/simplifyTailwindClasses'
import type { FlowbiteTheme } from '@/components/utils/FlowbiteThemable/types'

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

const classAttr = computed<string>(() => {
  return attrs.class as string || '' // TODO:
})
</script>
