<template>
  <component
    :is="componentTag"
    :class="itemClasses"
    :target="showTarget ? target : undefined"
    v-bind="linkAttr ? { [linkAttr]: linkTarget } : {}"
  >
    <div
      v-if="$slots.prefix"
      class="mr-2"
    >
      <slot name="prefix" />
    </div>
    <slot />
    <div
      v-if="$slots.suffix"
      class="ml-2"
    >
      <slot name="suffix" />
    </div>
  </component>
</template>

<script lang="ts" setup>
import { computed, resolveComponent, toRef, useAttrs } from 'vue'

import { useListGroupItemClasses } from './composables/useListGroupItemClasses'

const attrs = useAttrs()
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  target: {
    type: String,
    default: '_self',
  },
  tag: {
    type: String,
    default: 'li',
  },
})

const isLink = computed(() => !!props.href || !!props.to)
const isRouterLink = computed(() => props.tag === 'router-link' || props.tag === 'nuxt-link')
const linkComponent = computed(() => {
  if (isRouterLink.value) {
    return resolveComponent(props.tag)
  }
  return props.tag !== 'li' ? props.tag : 'a'
})
const componentTag = computed(() => {
  if (!isLink.value) return props.tag
  if (props.to) {
    return linkComponent.value
  }
  return 'a'
})
const linkAttr = computed(() => {
  if (!isLink.value) return null
  return isRouterLink.value
    ? 'to'
    : 'href'
})
const linkTarget = computed(() => props.to || props.href)
const showTarget = computed(() => !!props.href && !props.to)

const disabled = toRef(props, 'disabled')
const active = toRef(props, 'active')
const hover = computed(() => isLink.value || !!attrs.onClick)

const { itemClasses } = useListGroupItemClasses({ disabled, active, hover })
</script>
