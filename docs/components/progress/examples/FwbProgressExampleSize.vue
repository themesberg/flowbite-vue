<template>
  <div class="vp-raw grid gap-2">
    <fwb-progress
      :progress="25"
      label="Small"
      size="sm"
    />
    <fwb-progress
      :progress="50"
      label="Medium"
      size="md"
    />
    <fwb-progress
      :progress="75"
      label="Large"
      size="lg"
    />
    <fwb-progress
      :progress="100"
      label="Extra Large"
      size="xl"
    />
  </div>
</template>

<script setup>
import { FwbProgress } from '../../../../src/index'
</script>
