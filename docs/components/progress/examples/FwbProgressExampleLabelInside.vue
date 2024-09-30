<template>
  <fwb-progress
    :progress="50"
    label-position="inside"
    label-progress
    size="lg"
  />

  <div class="mb-4" />

  <fwb-progress
    :progress="0"
    label-position="inside"
    label-progress
    size="lg"
  />
</template>

<script setup>
import { FwbProgress } from '../../../../src/index'
</script>
