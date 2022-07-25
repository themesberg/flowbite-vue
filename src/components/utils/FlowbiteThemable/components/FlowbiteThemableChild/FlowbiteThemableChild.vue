<template>
  <component :is="tag" :class="simplifyTailwindClasses($attrs.class || [], classes)">
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

const { classes } = useFlowbiteThemableChildClasses(toRefs(props))
</script>
