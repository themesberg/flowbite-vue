<template>
  <div :class="alertClasses" role="alert" v-if="visible">
    <div :class="inline ? 'flex' : 'flex items-center'">
      <svg v-if="icon" :class="['flex-shrink-0', 'w-5', 'h-5', textClasses]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      <span
          :class="titleClasses"
          v-if="title"
      >
        {{ title }}
      </span>
      <button type="button" :class="closeClasses" aria-label="Close" @click="onCloseClick" v-if="!inline && closable">
        <span class="sr-only">Dismiss</span>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div :class="contentClasses">
      <slot />
    </div>
    <div class="inline-flex items-center" v-if="$slots.actions">
      <slot name="actions" />
    </div>
    <button type="button" :class="closeClasses" aria-label="Close" @click="onCloseClick" v-if="inline && closable">
      <span class="sr-only">Dismiss</span>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import { useAlertClasses } from './composables/useAlertClasses'
import { ref, toRefs } from 'vue'
import type { AlertType } from './types'


const props = defineProps({
  type: {
    type: String as PropType<AlertType>,
    default: 'info',
  },
  title: {
    type: String,
    default: '',
  },
  closable: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: true,
  },
  border: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: true,
  },
})

const { alertClasses, textClasses, closeClasses, contentClasses, titleClasses } = useAlertClasses(toRefs(props))

const visible = ref(true)

const onCloseClick = () => {
  visible.value = false
}
</script>
