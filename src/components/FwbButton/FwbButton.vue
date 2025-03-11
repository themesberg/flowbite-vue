<template>
  <component
    :is="buttonComponent"
    :class="wrapperClasses"
    :[linkAttr]="href"
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
  gradient?: ButtonGradient | null
  size?: ButtonSize
  shadow?: ButtonMonochromeGradient | boolean
  pill?: boolean
  square?: boolean
  outline?: boolean
  loading?: boolean
  loadingPosition?: 'suffix' | 'prefix'
  disabled?: boolean
  href?: string
  tag?: string
}
const props = withDefaults(defineProps<ButtonProps>(), {
  class: '',
  color: 'default',
  gradient: null,
  size: 'md',
  shadow: false,
  pill: false,
  square: false,
  outline: false,
  loading: false,
  loadingPosition: 'prefix',
  disabled: false,
  href: '',
  tag: 'a',
})

const buttonClasses = computed(() => useButtonClasses(toRefs(props)))
const wrapperClasses = computed(() => useMergeClasses(buttonClasses.value.wrapperClasses))
const spanClasses = computed(() => useMergeClasses(buttonClasses.value.spanClasses))

const isOutlineGradient = computed(() => props.outline && props.gradient)

const loadingPrefix = computed(() => props.loading && props.loadingPosition === 'prefix')
const loadingSuffix = computed(() => props.loading && props.loadingPosition === 'suffix')

const { color: spinnerColor, size: spinnerSize } = useButtonSpinner(toRefs(props))

const linkComponent = props.tag !== 'a' ? resolveComponent(props.tag) : 'a'
const buttonComponent = props.href ? linkComponent : 'button'
const linkAttr = props.tag === 'router-link' || props.tag === 'nuxt-link' ? 'to' : 'href'
</script>
