<template>
  <div class="vp-raw inline-flex align-center gap-2 flex-wrap">
    <button
      color="default"
      href="https://google.com"
      target="_blank"
    >
      Default
    </button>
    <button
      href="/about"
      tag="router-link"
    >
      Router link
    </button>
  </div>
</template>
<script setup>
import { Button } from '../../../../src/index'
</script>
