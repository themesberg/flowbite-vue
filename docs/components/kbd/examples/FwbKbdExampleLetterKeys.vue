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

const keys = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
]
</script>
