<template>
  <div class="vp-raw inline-flex align-center gap-2 flex-wrap">
    <Button color="default" href="https://google.com" target="_blank">Default</Button>
    <Button href="/about" tag="router-link">Router link</Button>
  </div>
</template>
<script setup>
import { Button } from '../../../../src/index'
</script>
