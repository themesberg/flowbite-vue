<template>
  <component
    :is="buttonComponent"
    :aria-busy="loading || undefined"
    :class="wrapperClasses"
    :disabled="(buttonComponent === 'button' && disabled) || undefined"
    :type="buttonComponent === 'button' ? 'button' : undefined"
    v-bind="linkAttr ? { [linkAttr]: linkValue } : {}"
  >
    <div
      v-if="!isOutlineGradient && ($slots.prefix || loadingPrefix)"
      class="mr-2"
    >
      <fwb-spinner
        v-if="loadingPrefix"
        :color="spinnerColor"
        :size="spinnerSize"
      />
      <slot
        v-else
        name="prefix"
      />
    </div>

    <span :class="spanClasses">
      <span
        v-if="isOutlineGradient && ($slots.prefix || loadingPrefix)"
        class="mr-2"
      >
        <fwb-spinner
          v-if="loadingPrefix"
          :color="spinnerColor"
          :size="spinnerSize"
        />
        <slot
          v-else
          name="prefix"
        />
      </span>

      <slot />

      <span
        v-if="isOutlineGradient && ($slots.suffix || loadingSuffix)"
        class="ml-2"
      >
        <fwb-spinner
          v-if="loadingSuffix"
          :color="spinnerColor"
          :size="spinnerSize"
        />
        <slot
          v-else
          name="suffix"
        />
      </span>
    </span>

    <div
      v-if="!isOutlineGradient && ($slots.suffix || loadingSuffix)"
      class="ml-2"
    >
      <fwb-spinner
        v-if="loadingSuffix"
        :color="spinnerColor"
        :size="spinnerSize"
      />
      <slot
        v-else
        name="suffix"
      />
    </div>
  </component>
</template>

<script lang="ts" setup>
import { computed, resolveComponent, toRefs } from 'vue'

import { useButtonClasses } from './composables/useButtonClasses'
import { useButtonSpinner } from './composables/useButtonSpinner'
import { type ButtonProps } from './types'

import FwbSpinner from '@/components/FwbSpinner/FwbSpinner.vue'

const props = withDefaults(defineProps<ButtonProps>(), {
  class: '',
  color: 'default',
  disabled: false,
  gradient: null,
  href: '',
  loading: false,
  loadingPosition: 'prefix',
  outline: false,
  pill: false,
  shadow: false,
  size: 'md',
  square: false,
  tag: 'a',
  to: undefined,
})

const { wrapperClasses, spanClasses } = useButtonClasses(toRefs(props))

const isOutlineGradient = computed(() => props.outline && props.gradient)

const loadingPrefix = computed(() => props.loading && props.loadingPosition === 'prefix')
const loadingSuffix = computed(() => props.loading && props.loadingPosition === 'suffix')

const { color: spinnerColor, size: spinnerSize } = useButtonSpinner(toRefs(props))

const buttonComponent = computed(() => {
  if (props.to) {
    try {
      return resolveComponent('router-link')
    } catch {
      console.warn('router-link component not found. Make sure vue-router is installed and properly configured.')
      return 'a'
    }
  }
  if (props.href) {
    return props.tag !== 'a' ? resolveComponent(props.tag) : 'a'
  }
  return 'button'
})

const linkAttr = computed(() => {
  if (props.to) return 'to'
  if (props.href) return props.tag === 'router-link' || props.tag === 'nuxt-link' ? 'to' : 'href'
  return undefined
})

const linkValue = computed(() => {
  if (props.to) return props.to
  if (props.href) return props.href
  return undefined
})
</script>
