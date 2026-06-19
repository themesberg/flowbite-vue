<template>
  <div class="vp-raw">
    <fwb-toggle
      v-model="toggle"
      label="Dark mode"
    >
      <template #helper>
        Switches the interface between light and dark themes.
      </template>
    </fwb-toggle>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbToggle } from '../../../../src/index'

const toggle = ref(false)
</script>
