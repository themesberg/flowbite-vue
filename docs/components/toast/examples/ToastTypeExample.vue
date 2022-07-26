<template>
  <div class="vp-raw flex align-center gap-2 flex-wrap flex-col">
    <Toast type="empty">
      You've unlocked achievement.
    </Toast>
    <Toast :type="'warning'">
      Improve password difficulty.
    </Toast>
    <Toast :type="'success'">
      Item moved successfully.
    </Toast>
    <Toast :type="'danger'">
      Item has been deleted.
    </Toast>
  </div>
</template>
<script setup>
import { Toast } from '../../../../src/index'
</script>
