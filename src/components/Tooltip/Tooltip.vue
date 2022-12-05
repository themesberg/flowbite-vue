<template>
  <div class="flex items-start">
    <TooltipComponent :placement="placement" :triggers="[trigger]" :theme="theme" auto-hide>
      <slot name="trigger"></slot>
      <template #popper>
        <slot name="content"></slot>
      </template>
    </TooltipComponent>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { TooltipPlacement, TooltipStyle, TooltipTrigger } from './types'
import { Tooltip as TooltipComponent } from 'floating-vue'
import 'floating-vue/dist/style.css'
import { computed } from 'vue'

const props = defineProps({
    placement: {
      type: String as PropType<TooltipPlacement>,
      default: 'top',
    },
    theme: {
      type: String as PropType<TooltipStyle>,
      default: 'dark',
    },
    trigger: {
      type: String as PropType<TooltipTrigger>,
      default: 'hover',
    },
})
const theme = computed(() => {
  const themes = {
    'light': 'tooltip-light',
    'dark': 'tooltip-dark',
  }
  return themes[props.theme]
})
</script>

<style>
.v-popper--theme-tooltip-dark .v-popper__wrapper .v-popper__inner {
  background: rgba(0,0,0);
  color: #fff;
  border-radius: 6px;
  padding: 7px 12px 6px;
}

.v-popper--theme-tooltip-dark .v-popper__arrow-inner {
  visibility: hidden;
}

.v-popper--theme-tooltip-dark .v-popper__arrow-outer {
  border-color: #000c;
}

@media (prefers-color-scheme: dark) {
  .v-popper--theme-tooltip-dark .v-popper__wrapper .v-popper__inner {
    background: rgb(55 65 81);
  }

  .v-popper--theme-tooltip-dark .v-popper__arrow-outer {
    border-color: rgb(55 65 81);
  }
}

.v-popper--theme-tooltip-light .v-popper__wrapper .v-popper__inner {
  background: #fff;
  color: black;
  padding: 7px 12px 6px;
  border-radius: 6px;
  border: 1px solid #eeeeee;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.25);
}

.v-popper--theme-tooltip-light .v-popper__arrow-inner {
  visibility: visible;
  border-color: #fff;
}

.v-popper--theme-tooltip-light .v-popper__arrow-outer {
  border-color: #ddd;
}

</style>
