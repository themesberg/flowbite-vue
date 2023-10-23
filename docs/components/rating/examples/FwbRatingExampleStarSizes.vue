<template>
  <div class="vp-raw grid gap-2">
    <fwb-rating
      :rating="4"
      size="sm"
    />
    <fwb-rating
      :rating="4"
      size="md"
    />
    <fwb-rating
      :rating="4"
      size="lg"
    />
  </div>
</template>

<script setup>
import { FwbRating } from '../../../../src/index'
</script>
