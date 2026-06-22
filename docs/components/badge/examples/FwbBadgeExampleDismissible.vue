<template>
  <div class="vp-raw flex flex-wrap gap-2">
    <fwb-badge
      v-if="shown.default"
      dismissible
      @dismiss="shown.default = false"
    >
      Default
    </fwb-badge>
    <fwb-badge
      v-if="shown.dark"
      dismissible
      type="dark"
      @dismiss="shown.dark = false"
    >
      Dark
    </fwb-badge>
    <fwb-badge
      v-if="shown.green"
      dismissible
      type="green"
      @dismiss="shown.green = false"
    >
      Green
    </fwb-badge>
    <fwb-badge
      v-if="shown.red"
      dismissible
      type="red"
      @dismiss="shown.red = false"
    >
      Red
    </fwb-badge>
    <button
      class="text-xs underline text-gray-500"
      @click="reset"
    >
      Reset
    </button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import { FwbBadge } from '../../../../src/index'

const shown = reactive({ default: true, dark: true, green: true, red: true })
const reset = () => Object.keys(shown).forEach(k => (shown[k as keyof typeof shown] = true))
</script>
