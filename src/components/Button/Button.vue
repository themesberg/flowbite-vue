<template>
  <button type="button" :class="wrapperClasses" :disabled="disabled">

    <div v-if="!isOutlineGradient && ($slots.prefix || loadingPrefix)" class="mr-2"> <!--automatically add mr class if slot provided or loading -->
      <spinner :color="spinnerColor" :size="spinnerSize" v-if="loadingPrefix" />
      <slot name="prefix" v-else />
    </div>

    <span :class="spanClasses">
      <div v-if="isOutlineGradient && ($slots.prefix || loadingPrefix)" class="mr-2"> <!--if outline gradient - need to place slots inside span -->
        <spinner :color="spinnerColor" :size="spinnerSize" v-if="loadingPrefix" />
        <slot name="prefix" v-else />
      </div>

      <slot/>

      <div v-if="isOutlineGradient && ($slots.suffix || loadingSuffix)" class="ml-2"> <!--if outline gradient - need to place slots inside span -->
        <spinner :color="spinnerColor" :size="spinnerSize" v-if="loadingSuffix" />
        <slot name="suffix" v-else />
      </div>
    </span>

    <div v-if="!isOutlineGradient && ($slots.suffix || loadingSuffix)" class="ml-2"> <!--automatically add ml class if slot provided or loading -->
      <spinner :color="spinnerColor" :size="spinnerSize" v-if="loadingSuffix" />
      <slot name="suffix" v-else />
    </div>

  </button>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType } from 'vue'
import Spinner from '../Spinner/Spinner.vue'
import { useButtonClasses } from './useButtonClasses'
import { useButtonSpinner } from './useButtonSpinner'

export type ButtonMonochromeGradient = 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple'
export type ButtonDuotoneGradient = 'purple-blue' | 'cyan-blue' | 'green-blue' | 'purple-pink' | 'pink-orange' | 'teal-lime' | 'red-yellow'
export type ButtonGradient = ButtonDuotoneGradient | ButtonMonochromeGradient

export type ButtonVariant = 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = defineProps({
  color: {
    type: String as PropType<ButtonVariant>,
    default: 'default',
  },
  gradient: {
    type: [String, null] as PropType<ButtonGradient | null>,
    default: null,
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md',
  },
  shadow: {
    type: [String, null] as PropType<ButtonMonochromeGradient | '' | null>,
    default: null,
  },
  pill: {
    type: Boolean,
    default: false,
  },
  square: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingPosition: {
    type: String as PropType<'suffix' | 'prefix'>,
    default: 'prefix',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const isOutlineGradient = computed(() => props.outline && props.gradient)

const loadingPrefix = computed(() => props.loading && props.loadingPosition === 'prefix')
const loadingSuffix = computed(() => props.loading && props.loadingPosition === 'suffix')

const { wrapperClasses, spanClasses } = useButtonClasses(props)
const { color: spinnerColor, size: spinnerSize } = useButtonSpinner(props)

</script>
