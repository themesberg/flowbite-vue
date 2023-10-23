<template>
  <div class="vp-raw">
    <span class="">Select theme:</span>
    <div class="grid xs:grid-cols-5 md:grid-cols-7 mb-5 mt-2">
      <fwb-radio
        v-model="activeTheme"
        value="blue"
      >
        Blue
      </fwb-radio>
      <fwb-radio
        v-model="activeTheme"
        value="green"
      >
        Green
      </fwb-radio>
      <fwb-radio
        v-model="activeTheme"
        value="pink"
      >
        Pink
      </fwb-radio>
      <fwb-radio
        v-model="activeTheme"
        value="purple"
      >
        Purple
      </fwb-radio>
      <fwb-radio
        v-model="activeTheme"
        value="red"
      >
        Red
      </fwb-radio>
    </div>
    <div class="inline-flex align-center gap-2 flex-wrap">
      <flowbite-themable :theme="activeTheme">
        <fwb-dropdown text="Dropdown">
          Dropdown content...
        </fwb-dropdown>
      </flowbite-themable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FlowbiteThemable, FwbDropdown, FwbRadio } from '../../../../src/index'
import type { FlowbiteTheme } from '../../../../src/components/utils/FlowbiteThemable/types'

const activeTheme = ref<FlowbiteTheme>('blue')
</script>
