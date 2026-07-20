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

const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
</script>
