<template>
  <component
    :is="buttonComponent"
    :[linkAttr]="href"
    :class="wrapperClasses"
  >
    <div
      v-if="!isOutlineGradient && ($slots.prefix || loadingPrefix)"
      class="mr-2"
    >
      <!--automatically add mr class if slot provided or loading -->
      <spinner
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
        <spinner
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
        <spinner
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
      <spinner
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
import Spinner from '../Spinner/Spinner.vue'
import { useButtonClasses } from './composables/useButtonClasses'
import { useButtonSpinner } from './composables/useButtonSpinner'
import type { ButtonGradient, ButtonMonochromeGradient, ButtonSize, ButtonVariant } from './types'

interface IButtonProps {
  color?: ButtonVariant
  disabled?: boolean
  gradient?: ButtonGradient | null
  href?: string
  loading?: boolean
  loadingPosition?: 'suffix' | 'prefix'
  outline?: boolean
  pill?: boolean
  shadow?: ButtonMonochromeGradient | null
  size?: ButtonSize
  square?: boolean
  tag?: string
}

const props = withDefaults(defineProps<IButtonProps>(), {
  color: 'default',
  disabled: false,
  gradient: null,
  href: '',
  loading: false,
  loadingPosition: 'prefix',
  outline: false,
  pill: false,
  shadow: null,
  size: 'md',
  square: false,
  tag: 'a',
})

const isOutlineGradient = computed(() => props.outline && props.gradient)

const loadingPrefix = computed(() => props.loading && props.loadingPosition === 'prefix')
const loadingSuffix = computed(() => props.loading && props.loadingPosition === 'suffix')

const { wrapperClasses, spanClasses } = useButtonClasses(toRefs(props))
const { color: spinnerColor, size: spinnerSize } = useButtonSpinner(toRefs(props))

const linkComponent = props.tag !== 'a' ? resolveComponent(props.tag) : 'a'
const buttonComponent = props.href ? linkComponent : 'button'
const linkAttr = props.tag === 'router-link' || props.tag === 'nuxt-link' ? 'to' : 'href'
</script>
