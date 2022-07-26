<template>
  <toast-provider>
    <div class="vp-raw flex align-center gap-2 flex-wrap flex-col">
      <toast-provider-example-child />
    </div>
  </toast-provider>
</template>
<script setup>
import { ToastProvider } from '../../../../src/index'
import ToastProviderExampleChild from './ToastProviderExampleChild.vue'
</script>
