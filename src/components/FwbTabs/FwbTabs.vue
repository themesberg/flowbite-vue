<template>
  <template v-if="!vertical">
    <ul
      role="tablist"
      :class="tabClasses"
    >
      <fwb-tab-content
        v-for="(item, id) in tabsChildren"
        :key="id"
        :active="modelValueRef === item.props?.name"
        :disabled="item.props?.disabled"
        :name="item.props?.name"
        :title="item.props?.title"
        @click="emitClick"
      />
    </ul>
    <div v-bind="$attrs">
      <slot />
    </div>
  </template>
  <template v-else>
    <div class="flex">
      <ul
        role="tablist"
        :class="tabClasses"
      >
        <fwb-tab-content
          v-for="(item, id) in tabsChildren"
          :key="id"
          :active="modelValueRef === item.props?.name"
          :disabled="item.props?.disabled"
          :name="item.props?.name"
          :title="item.props?.title"
          @click="emitClick"
        />
      </ul>
      <div
        class="flex-1"
        v-bind="$attrs"
      >
        <slot />
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { computed, provide, toRef, useSlots, type VNode } from 'vue'

import { useTabsClasses } from './composables/useTabsClasses'
import FwbTabContent from './FwbTabContent.vue'
import {
  TAB_ACTIVATE_KEY,
  TAB_ACTIVE_NAME_KEY,
  TAB_DIRECTIVE_KEY,
  TAB_FULL_WIDTH_KEY,
  TAB_ICON_POSITION_KEY,
  TAB_ICON_SLOTS_KEY,
  TAB_ITEM_ACTIVE_CLASS_KEY,
  TAB_ITEM_CLASS_KEY,
  TAB_VARIANT_KEY,
  TAB_VERTICAL_KEY,
} from './injection/config'

import type { TabsVariant } from './types'

import { flatten } from '@/utils/flatten'

defineOptions({
  inheritAttrs: false,
})

interface ITabsProps {
  variant?: TabsVariant
  modelValue?: string
  directive?: 'if' | 'show'
  tabClass?: string
  itemClass?: string
  itemActiveClass?: string
  iconPosition?: 'left' | 'right'
  vertical?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<ITabsProps>(), {
  variant: 'default',
  modelValue: '',
  directive: 'if',
  tabClass: '',
  itemClass: '',
  itemActiveClass: '',
  iconPosition: 'left',
  vertical: false,
  fullWidth: false,
})

const emit = defineEmits(['update:modelValue', 'click:tab'])

const { tabClasses } = useTabsClasses(props)

provide(TAB_VARIANT_KEY, toRef(props, 'variant'))
provide(TAB_ITEM_CLASS_KEY, toRef(props, 'itemClass'))
provide(TAB_ITEM_ACTIVE_CLASS_KEY, toRef(props, 'itemActiveClass'))
provide(TAB_ICON_POSITION_KEY, toRef(props, 'iconPosition'))
provide(TAB_VERTICAL_KEY, toRef(props, 'vertical'))
provide(TAB_FULL_WIDTH_KEY, toRef(props, 'fullWidth'))

const slots = useSlots()
const defaultSlot = slots.default

const tabsChildren = computed(() => {
  return defaultSlot
    ? flatten(defaultSlot({})).filter((v) => {
      return (v.type as { __FLOWBITE_TAB__?: true }).__FLOWBITE_TAB__
    })
    : []
})

const iconSlots = computed(() => {
  const map: Record<string, (() => VNode[]) | undefined> = {}
  for (const item of tabsChildren.value) {
    const name = item.props?.name as string | undefined
    if (name) {
      map[name] = (item.children as { icon?: () => VNode[] } | null)?.icon
    }
  }
  return map
})

provide(TAB_ICON_SLOTS_KEY, iconSlots)

const modelValueRef = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
})

provide(TAB_ACTIVE_NAME_KEY, modelValueRef)
provide(TAB_DIRECTIVE_KEY, toRef(props, 'directive'))

const onActivate = (value: string) => {
  modelValueRef.value = value
}

const emitClick = (): void => {
  emit('click:tab')
}

provide(TAB_ACTIVATE_KEY, onActivate)
</script>
