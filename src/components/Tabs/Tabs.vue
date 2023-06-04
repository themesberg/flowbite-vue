<template>
  <div>
    <div :class="divClasses">
      <ul :class="ulClasses">
        <tab-pane
            v-for="(item, id) in tabsChildren"
            :key="id"
            :active="modelValueRef === item.props?.name"
            :name="item.props?.name"
            :disabled="item.props?.disabled"
            :title="item.props?.title"
            @click="emitClick"
        />
      </ul>
    </div>
    <div v-bind="$attrs">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  TAB_ACTIVATE_INJECTION_KEY,
  TAB_ACTIVE_NAME_INJECTION_KEY,
  TAB_STYLE_INJECTION_KEY,
  TAB_VISIBILITY_DIRECTIVE_INJECTION_KEY,
} from './injection/config'
import { useTabsClasses } from './composables/useTabsClasses'
import type { PropType } from 'vue'
import { computed, provide, toRef, useSlots } from 'vue'
import { flatten } from '@/utils/flatten'
import TabPane from './components/TabPane/TabPane.vue'
import type { TabsVariant } from './types'

const props = defineProps({
  variant: {
    type: String as PropType<TabsVariant>,
    default: 'default',
  },
  modelValue: {
    type: String,
    default: '',
  },
  directive: {
    type: String as PropType<'if' | 'show'>,
    default: 'if',
  },
})

const emit = defineEmits(['update:modelValue', 'click:pane'])

const { ulClasses, divClasses } = useTabsClasses(props)

provide(TAB_STYLE_INJECTION_KEY, props.variant)

const slots = useSlots()
const defaultSlot = slots.default

const tabsChildren = computed(() => {
  return defaultSlot
      ? flatten(defaultSlot()).filter((v) => {
        return (v.type as { __FLOWBITE_TAB__?: true }).__FLOWBITE_TAB__
      })
      : []
})

const modelValueRef = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
})

provide(TAB_ACTIVE_NAME_INJECTION_KEY, modelValueRef)
provide(TAB_VISIBILITY_DIRECTIVE_INJECTION_KEY, toRef(props, 'directive'))

const onActivate = (value: string) => {
  modelValueRef.value = value
}

function emitClick(): void {
  emit('click:pane')
}

provide(TAB_ACTIVATE_INJECTION_KEY, onActivate)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
