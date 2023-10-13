<template>
  <div class="vp-raw grid gap-2">
    <fwb-toast>
      You've unlocked achievement.
    </fwb-toast>
    <fwb-toast type="warning">
      Improve password difficulty.
    </fwb-toast>
    <fwb-toast type="success">
      Item moved successfully.
    </fwb-toast>
    <fwb-toast type="danger">
      Item has been deleted.
    </fwb-toast>
  </div>
</template>

<script setup>
import { FwbToast } from '../../../../src/index'
</script>
