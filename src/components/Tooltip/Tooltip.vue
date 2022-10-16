<template>
  <div>
      <Popper :class="colorStyle"  v-bind="$attrs" :placement="placement"> 
        <slot name="trigger"></slot>

        <template #content>
          <slot name="content"></slot>
        </template>
      </Popper>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { TooltipPlacement, TooltipStyle } from './types'
import Popper from "vue3-popper";

const props = defineProps({
    placement: {
      type: String as PropType<TooltipPlacement>,
      default: "top"
    },
    colorStyle: {
      type: String  as PropType<TooltipStyle>,
      default: "tooltip-dark",
    }
})
</script>

<style scoped>
  .tooltip-dark {
  --popper-theme-background-color: #0f172a;
  --popper-theme-background-color-hover: #0f172a;
  --popper-theme-text-color: white;
  --popper-theme-border-width: 0px;
  --popper-theme-border-radius: 6px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}

.tooltip-light {
  --popper-theme-background-color: #ffffff;
  --popper-theme-background-color-hover: #ffffff;
  --popper-theme-text-color: #333333;
  --popper-theme-border-width: 1px;
  --popper-theme-border-style: solid;
  --popper-theme-border-color: #eeeeee;
  --popper-theme-border-radius: 6px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
