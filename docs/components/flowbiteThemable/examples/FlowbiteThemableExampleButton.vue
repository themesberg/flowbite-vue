<template>
  <div class="vp-raw">
    <div class="flex flex-wrap gap-2">
      <flowbite-themable
        v-for="themeName in themes"
        :key="themeName"
        :theme="themeName"
      >
        <fwb-button>
          {{ themeName }}
        </fwb-button>
      </flowbite-themable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FlowbiteThemable, FwbButton } from '../../../../src/index'

import type { FlowbiteTheme } from '../../../../src/components/utils/FlowbiteThemable/types'
import type { PropType } from 'vue'

const themes: FlowbiteTheme[] = ['blue', 'green', 'red', 'pink', 'purple']

defineProps({
  theme: {
    type: String as PropType<FlowbiteTheme>,
    default: 'blue',
  },
})
</script>
