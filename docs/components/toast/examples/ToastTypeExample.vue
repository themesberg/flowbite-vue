<template>
  <div class="vp-raw flex align-center gap-2 flex-wrap flex-col">
    <toast type="empty">
      You've unlocked achievement.
    </toast>
    <toast :type="'warning'">
      Improve password difficulty.
    </toast>
    <toast :type="'success'">
      Item moved successfully.
    </toast>
    <toast :type="'danger'">
      Item has been deleted.
    </toast>
  </div>
</template>
<script setup>
import { Toast } from '../../../../src/index'
</script>
