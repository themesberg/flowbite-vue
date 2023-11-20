<template>
  <div class="vp-raw">
    <fwb-jumbotron
      header-text="Jumbotron header text"
      sub-text="Longer subtext shows additional information."
    >
      <template #divider>
        <div class="my-8">
          ----------------------Im a custom divider----------------------
        </div>
      </template>
      And jumbotron body text
    </fwb-jumbotron>
  </div>
</template>

<script setup>
import FwbJumbotron from '@/components/FwbJumbotron/FwbJumbotron.vue'
</script>
