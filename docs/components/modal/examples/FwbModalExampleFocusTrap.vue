<template>
  <div class="vp-raw flex justify-start space-x-2">
    <fwb-modal-example
      trigger-text="Without Focus Trap"
    />
    <fwb-modal-example
      focus-trap
      trigger-text="With Focus Trap"
    />
  </div>
</template>

<script lang="ts" setup>
import FwbModalExample from './FwbModalExample.vue'
</script>
