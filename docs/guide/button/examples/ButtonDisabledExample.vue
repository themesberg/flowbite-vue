<template>
  <div class="inline-flex align-center gap-2 flex-wrap">
    <Button color="default" disabled>Default</Button>
    <Button color="default" outline disabled>Default outline</Button>
    <Button gradient="red" disabled>Red gradient</Button>
    <Button gradient="red-yellow" disabled>Red to yellow gradient</Button>
    <Button gradient="red-yellow" outline disabled>Red to yellow outline</Button>
  </div>
</template>
<script setup>
import { Button } from '../../../../src/index'
</script>
