<template>
  <div>
    <div class="vp-raw inline-flex align-center gap-2 flex-wrap">
      <flowbite-themable :theme="theme">
        <dropdown text="Text 1">
          Content 1
        </dropdown>
        <dropdown text="Text 2">
          Content 2
        </dropdown>
        <dropdown text="Text 3">
          Content 3
        </dropdown>
      </flowbite-themable>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import { Dropdown, FlowbiteThemable } from '../../../../../src/index'
import type { FlowbiteTheme } from '../../../../../src/components/utils/FlowbiteThemable/types'

defineProps({
  theme: {
    type: String as PropType<FlowbiteTheme>,
    default: 'blue',
  },
})
</script>
