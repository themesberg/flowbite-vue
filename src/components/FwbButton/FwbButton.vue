<template>
  <component
    :is="buttonComponent"
    :[linkAttr]="linkValue"
    :class="wrapperClasses"
    :disabled="buttonComponent === 'button' && disabled"
  >
    <div
      v-if="!isOutlineGradient && ($slots.prefix || loadingPrefix)"
      class="mr-2"
    >
      <!--automatically add mr class if slot provided or loading -->
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
        <!--if outline gradient - need to place slots inside span -->
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
        <!--if outline gradient - need to place slots inside span -->
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
      <!--automatically add ml class if slot provided or loading -->
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

import type { ButtonGradient, ButtonMonochromeGradient, ButtonSize, ButtonVariant } from './types'

import FwbSpinner from '@/components/FwbSpinner/FwbSpinner.vue'
import { useMergeClasses } from '@/composables/useMergeClasses'

interface ButtonProps {
  class?: string | object
  color?: ButtonVariant
  disabled?: boolean
  gradient?: ButtonGradient | null
  href?: string
  loading?: boolean
  loadingPosition?: 'suffix' | 'prefix'
  outline?: boolean
  pill?: boolean
  shadow?: ButtonMonochromeGradient | boolean
  size?: ButtonSize
  square?: boolean
  tag?: string
  to?: string | object
}
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

const buttonClasses = computed(() => useButtonClasses(toRefs(props)))
const wrapperClasses = computed(() => useMergeClasses(buttonClasses.value.wrapperClasses))
const spanClasses = computed(() => useMergeClasses(buttonClasses.value.spanClasses))

const isOutlineGradient = computed(() => props.outline && props.gradient)

const loadingPrefix = computed(() => props.loading && props.loadingPosition === 'prefix')
const loadingSuffix = computed(() => props.loading && props.loadingPosition === 'suffix')

const { color: spinnerColor, size: spinnerSize } = useButtonSpinner(toRefs(props))

const linkComponent = props.tag !== 'a' ? resolveComponent(props.tag) : 'a'
const buttonComponent = computed(() => {
  if (props.to) {
    try {
      return resolveComponent('router-link')
    } catch {
      console.warn('router-link component not found. Make sure vue-router is installed and properly configured.')
      return 'a'
    }
  }
  return props.href ? linkComponent : 'button'
})
const linkAttr = computed(() => {
  if (props.to) return 'to'
  return props.tag === 'router-link' || props.tag === 'nuxt-link' ? 'to' : 'href'
})
const linkValue = computed(() => props.to || props.href)
</script>
