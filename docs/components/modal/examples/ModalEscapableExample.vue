<template>
  <div class="vp-raw flex justify-start space-x-2">
    <span>
      <ModalExample trigger-text="Escapable" />
    </span>
    <span>
      <ModalExample :escapable="false" trigger-text="Not Escapable" />
    </span>
  </div>
</template>
<script setup>
import ModalExample from './ModalExample.vue'
</script>
