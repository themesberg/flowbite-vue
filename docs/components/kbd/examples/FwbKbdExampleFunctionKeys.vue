<template>
  <div class="vp-raw flex flex-wrap gap-1">
    <fwb-kbd
      v-for="key in keys"
      :key="key"
    >
      {{ key }}
    </fwb-kbd>
  </div>
</template>

<script lang="ts" setup>
import { FwbKbd } from '../../../../src/index'

const keys = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12']
</script>
