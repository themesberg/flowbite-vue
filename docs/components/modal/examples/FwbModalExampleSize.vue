<template>
  <div class="vp-raw flex justify-start space-x-2">
    <span>
      <fwb-modal-example
        size="xs"
        trigger-text="SM Modal"
      />
    </span>
    <span>
      <fwb-modal-example
        size="md"
        trigger-text="MD Modal"
      />
    </span>
    <span>
      <fwb-modal-example
        size="xl"
        trigger-text="XL Modal"
      />
    </span>
    <span>
      <fwb-modal-example
        size="5xl"
        trigger-text="5XL Modal"
      />
    </span>
  </div>
</template>

<script setup>
import FwbModalExample from './FwbModalExample.vue'
</script>
