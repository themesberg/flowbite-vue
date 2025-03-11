<template>
  <div class="vp-raw grid gap-2">
    <fwb-alert type="info">
      <span class="font-medium">Ensure that these requirements are met:</span>
      <ul class="ml-4 mt-1.5 list-inside list-disc">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
      </ul>
    </fwb-alert>
    <fwb-alert type="danger">
      <span class="font-medium">Ensure that these requirements are met:</span>
      <ul class="ml-4 mt-1.5 list-inside list-disc">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
      </ul>
    </fwb-alert>
  </div>
</template>

<script lang="ts" setup>
import { FwbAlert } from '../../../../src/index'
</script>
