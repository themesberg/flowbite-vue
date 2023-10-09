<template>
  <div class="vp-raw inline-flex align-center gap-2 flex-wrap">
    <fwb-button
      color="default"
      href="https://google.com"
      target="_blank"
    >
      Default
    </fwb-button>
    <fwb-button
      href="/about"
      tag="router-link"
    >
      Router link
    </fwb-button>
  </div>
</template>
<script setup>
import { FwbButton } from '../../../../src/index'
</script>
