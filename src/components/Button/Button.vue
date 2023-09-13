<template>
  <button :class="wrapperClasses">
    <div v-if="!isOutlineGradient && ($slots.prefix || loadingPrefix)" class="mr-2">
      <!--automatically add mr class if slot provided or loading -->
      <spinner :color="spinnerColor" :size="spinnerSize" v-if="loadingPrefix" />
      <slot name="prefix" v-else />
    </div>

    <span :class="spanClasses">
      <div v-if="isOutlineGradient && ($slots.prefix || loadingPrefix)" class="mr-2">
        <!--if outline gradient - need to place slots inside span -->
        <spinner :color="spinnerColor" :size="spinnerSize" v-if="loadingPrefix" />
        <slot name="prefix" v-else />
      </div>

      <slot />

      <div v-if="isOutlineGradient && ($slots.suffix || loadingSuffix)" class="ml-2">
        <!--if outline gradient - need to place slots inside span -->
        <spinner :color="spinnerColor" :size="spinnerSize" v-if="loadingSuffix" />
        <slot name="suffix" v-else />
      </div>
    </span>

    <div v-if="!isOutlineGradient && ($slots.suffix || loadingSuffix)" class="ml-2">
      <!--automatically add ml class if slot provided or loading -->
      <spinner :color="spinnerColor" :size="spinnerSize" v-if="loadingSuffix" />
      <slot name="suffix" v-else />
    </div>
  </button>
</template>
<script lang="ts" setup>
import { computed, toRefs, type PropType } from 'vue'
import Spinner from '../Spinner/Spinner.vue'
import { useButtonClasses } from './composables/useButtonClasses'
import { useButtonSpinner } from './composables/useButtonSpinner'
import type { ButtonGradient, ButtonMonochromeGradient, ButtonSize, ButtonVariant } from './types'
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

const { wrapperClasses, spanClasses } = useButtonClasses(toRefs(props))
const { color: spinnerColor, size: spinnerSize } = useButtonSpinner(toRefs(props))
</script>
