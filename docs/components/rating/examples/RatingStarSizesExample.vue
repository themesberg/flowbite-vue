<template>
  <div class="vp-raw flex flex-col gap-5">
    <!-- Small -->
    <Rating size="sm" :rating="4" />
    <!-- Medium -->
    <Rating size="md" :rating="4" />
    <!-- Large -->
    <Rating size="lg" :rating="4" />
  </div>
</template>
<script setup>
import { Rating } from '../../../../src/index'
</script>
