<template>
  <div class="vp-raw flex justify-between">
    <span>
      <ModalExample size="xs" trigger-text="XS Modal"/>
    </span>
    <span>
      <ModalExample size="md" trigger-text="MD Modal"/>
    </span>
    <span>
      <ModalExample size="xl" trigger-text="XL Modal"/>
    </span>
    <span>
      <ModalExample size="5xl" trigger-text="5XL Modal"/>
    </span>
  </div>
</template>
<script setup>
import ModalExample from './ModalExample.vue'
</script>
