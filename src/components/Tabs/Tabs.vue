<template>
  <div>
    <div :class="divClasses">
      <ul :class="ulClasses">
        <tab-pane
            v-for="(item, id) in tabsChildren"
            :key="id"
            :active="modelValueRef === item.props.name"
            :name="item.props.name"
            :disabled="item.props.disabled"
            :title="item.props.title"
        />
      </ul>
    </div>
    <slot/>
  </div>
</template>
<script lang="ts" setup>
import { TAB_ACTIVATE_INJECTION_KEY, TAB_STYLE_INJECTION_KEY } from './config'
import { useTabsClasses } from './useTabsClasses'
import type { PropType } from 'vue'
import { computed, provide, useSlots } from 'vue'
import { flatten } from '../../utils/flatten'
import TabPane from './components/TabPane/TabPane.vue'

export type TabsVariant = 'default' | 'underline' | 'pills'

const props = defineProps({
  variant: {
    type: String as PropType<TabsVariant>,
    default: 'default',
  },
  modelValue: {
    type: String,
    default: '',
  },
})


const emit = defineEmits(['update:modelValue'])

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

const onActivate = (value: string) => {
  modelValueRef.value = value
}

provide(TAB_ACTIVATE_INJECTION_KEY, onActivate)
</script>
