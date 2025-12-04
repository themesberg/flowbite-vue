<template>
  <div class="flex flex-wrap gap-2 vp-raw">
    <fwb-button
      href="https://google.com"
      target="_blank"
    >
      Google.com
    </fwb-button>
    <!-- we're missing `vue-router` dependency for this to work-->
    <!-- <fwb-button
      href="/pages/getting-started"
      tag="router-link"
    >
      Quickstart
    </fwb-button> -->
  </div>
</template>

<script lang="ts" setup>
import { FwbButton } from '../../../../src/index'
</script>
