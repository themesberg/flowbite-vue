<template>
  <div>
    <div class="vp-raw inline-flex align-center gap-2 flex-wrap">
      <flowbite-themable
        v-for="theme in themes"
        :key="theme"
        :theme="theme"
      >
        <button>
          {{ theme }}
        </button>
      </flowbite-themable>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import { Button, FlowbiteThemable } from '../../../../../src/index'
import type { FlowbiteTheme } from '../../../../../src/components/utils/FlowbiteThemable/types'

const themes: FlowbiteTheme[] = ['blue', 'green', 'red', 'pink', 'purple']

defineProps({
  theme: {
    type: String as PropType<FlowbiteTheme>,
    default: 'blue',
  },
})
</script>
