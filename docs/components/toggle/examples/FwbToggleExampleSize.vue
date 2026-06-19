<template>
  <div class="gap-3 grid vp-raw">
    <fwb-toggle
      label="Small"
      size="sm"
    />
    <fwb-toggle
      label="Medium"
      size="md"
    />
    <fwb-toggle
      label="Large"
      size="lg"
    />
    <fwb-toggle
      label="Extra Large"
      size="xl"
    />
  </div>
</template>

<script lang="ts" setup>
import { FwbToggle } from '../../../../src/index'
</script>
