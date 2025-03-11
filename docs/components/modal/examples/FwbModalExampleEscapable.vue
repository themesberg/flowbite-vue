<template>
  <div class="vp-raw flex justify-start space-x-2">
    <fwb-modal-example trigger-text="Escapable" />
    <fwb-modal-example
      not-escapable
      trigger-text="Not Escapable"
    />
  </div>
</template>

<script lang="ts" setup>
import FwbModalExample from './FwbModalExample.vue'
</script>
