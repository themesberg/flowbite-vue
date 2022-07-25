<template>
  <component :is="tag" :class="simplifyTailwindClasses($attrs.class || [], classes)">
    <slot />
  </component>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import {
  useFlowbiteThemableChildrenClasses,
} from './composables/useFlowbiteThemableChildrenClasses'
import type {
  ThemableChildrenApply,
} from '@/components/utils/FlowbiteThemable/components/FlowbiteThemableChildren/types'
import { toRefs } from 'vue'
import { simplifyTailwindClasses } from '../../../../../utils/simplifyTailwindClasses'

const props = defineProps({
  apply: {
    type: Array as PropType<ThemableChildrenApply[]>,
    required: true,
  },
  tag: {
    type: String,
    default: 'div',
  },
})

const { classes } = useFlowbiteThemableChildrenClasses(toRefs(props))
</script>
