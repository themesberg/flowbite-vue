<template>
  <div class="vp-raw flex justify-start space-x-2">
    <span>
      <ModalExample size="xs" trigger-text="SM Modal" />
    </span>
    <span>
      <ModalExample size="md" trigger-text="MD Modal" />
    </span>
    <span>
      <ModalExample size="xl" trigger-text="XL Modal" />
    </span>
    <span>
      <ModalExample size="5xl" trigger-text="5XL Modal" />
    </span>
  </div>
</template>
<script setup>
import ModalExample from './ModalExample.vue'
</script>
