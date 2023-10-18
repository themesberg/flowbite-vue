<template>
  <component :is="buttonComponent" :disabled="buttonComponent === 'button' && disabled" :class="wrapperClasses" :[linkAttr]="href">
    <div v-if="!isOutlineGradient && ($slots.prefix || loadingPrefix)" class="mr-2">
      <!--automatically add mr class if slot provided or loading -->
      <spinner :color="spinnerColor" :size="spinnerSize" v-if="loadingPrefix" />
      <slot name="prefix" v-else />
    </div>

    <span :class="spanClasses">
      <span v-if="isOutlineGradient && ($slots.prefix || loadingPrefix)" class="mr-2">
        <!--if outline gradient - need to place slots inside span -->
        <spinner :color="spinnerColor" :size="spinnerSize" v-if="loadingPrefix" />
        <slot name="prefix" v-else />
      </span>

      <slot />

      <span v-if="isOutlineGradient && ($slots.suffix || loadingSuffix)" class="ml-2">
        <!--if outline gradient - need to place slots inside span -->
        <spinner :color="spinnerColor" :size="spinnerSize" v-if="loadingSuffix" />
        <slot name="suffix" v-else />
      </span>
    </span>

    <div v-if="!isOutlineGradient && ($slots.suffix || loadingSuffix)" class="ml-2">
      <!--automatically add ml class if slot provided or loading -->
      <spinner :color="spinnerColor" :size="spinnerSize" v-if="loadingSuffix" />
      <slot name="suffix" v-else />
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
  gradient?: ButtonGradient | null
  size?: ButtonSize
  shadow?: ButtonMonochromeGradient | null
  pill?: boolean
  square?: boolean
  outline?: boolean
  loading?: boolean
  loadingPosition?: 'suffix' | 'prefix'
  disabled?: boolean
  href?: string
  tag?: string
}
const props = withDefaults(defineProps<IButtonProps>(), {
  color: 'default',
  gradient: null,
  size: 'md',
  shadow: null,
  pill: false,
  square: false,
  outline: false,
  loading: false,
  loadingPosition: 'prefix',
  disabled: false,
  href: '',
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
