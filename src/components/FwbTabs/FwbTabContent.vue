<template>
  <li
    role="presentation"
    :class="{ 'flex-1': fullWidth && !vertical }"
  >
    <button
      :id="`tab-${name}`"
      type="button"
      role="tab"
      :data-name="name"
      :aria-controls="`panel-${name}`"
      :aria-selected="active"
      :aria-label="!title ? name : undefined"
      :tabindex="active ? 0 : -1"
      :disabled="disabled || undefined"
      :class="tabClasses"
      @click="tryActivateTab"
      @keydown="handleKeydown"
    >
      <template v-if="iconPosition === 'left'">
        <component
          :is="iconComponent"
          v-if="hasIcon"
          aria-hidden="true"
        />
        <span v-if="title">{{ title }}</span>
      </template>
      <template v-else>
        <span v-if="title">{{ title }}</span>
        <component
          :is="iconComponent"
          v-if="hasIcon"
          aria-hidden="true"
        />
      </template>
    </button>
  </li>
</template>

<script lang="ts" setup>
import { computed, inject, ref, toRef, type VNode } from 'vue'

import { useTabClasses } from './composables/useTabClasses'
import {
  TAB_ACTIVATE_KEY,
  TAB_FULL_WIDTH_KEY,
  TAB_ICON_POSITION_KEY,
  TAB_ICON_SLOTS_KEY,
  TAB_ITEM_ACTIVE_CLASS_KEY,
  TAB_ITEM_CLASS_KEY,
  TAB_VARIANT_KEY,
  TAB_VERTICAL_KEY,
} from './injection/config'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
})

const variant = inject(TAB_VARIANT_KEY)
const itemClass = inject(TAB_ITEM_CLASS_KEY)
const itemActiveClass = inject(TAB_ITEM_ACTIVE_CLASS_KEY)
const onActivate = inject(TAB_ACTIVATE_KEY)
const iconSlots = inject(TAB_ICON_SLOTS_KEY, ref({} as Record<string, (() => VNode[]) | undefined>))
const iconPosition = inject(TAB_ICON_POSITION_KEY, ref<'left' | 'right'>('left'))
const fullWidth = inject(TAB_FULL_WIDTH_KEY, ref(false))
const vertical = inject(TAB_VERTICAL_KEY, ref(false))

const iconSlotFn = computed(() => iconSlots.value[props.name])
const hasIcon = computed(() => !!iconSlotFn.value)
const iconComponent = computed(() => {
  const fn = iconSlotFn.value
  return fn ? () => fn() : null
})

const tryActivateTab = () => {
  if (props.disabled) return
  if (!onActivate) return
  onActivate(props.name)
}

const handleKeydown = (event: KeyboardEvent) => {
  const target = event.currentTarget as HTMLElement
  const list = target.closest('[role="tablist"]')
  if (!list) return

  const tabs = [...list.querySelectorAll<HTMLElement>('[role="tab"]:not([disabled])')]
  const currentIndex = tabs.indexOf(target)
  if (currentIndex === -1) return

  let targetIndex: number | null = null
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      targetIndex = (currentIndex + 1) % tabs.length
      break
    case 'ArrowLeft':
    case 'ArrowUp':
      targetIndex = (currentIndex - 1 + tabs.length) % tabs.length
      break
    case 'Home':
      targetIndex = 0
      break
    case 'End':
      targetIndex = tabs.length - 1
      break
    default:
      return
  }

  event.preventDefault()
  const targetTab = tabs[targetIndex]
  targetTab.focus()
  const targetName = targetTab.dataset.name
  if (targetName && onActivate) onActivate(targetName)
}

const { tabClasses } = useTabClasses({
  active: toRef(props, 'active'),
  disabled: toRef(props, 'disabled'),
  variant,
  itemClass,
  itemActiveClass,
  vertical,
  fullWidth,
})
</script>
