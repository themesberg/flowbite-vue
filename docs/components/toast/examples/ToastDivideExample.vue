<template>
  <div class="vp-raw flex align-center gap-2 flex-wrap flex-col">
    <toast
      type="empty"
      closable
      divide
    >
      You've unlocked achievement.
    </toast>
    <toast
      :type="'warning'"
      closable
      divide
    >
      Improve password difficulty.
    </toast>
    <toast
      :type="'success'"
      closable
      divide
    >
      Item moved successfully.
    </toast>
    <toast
      :type="'danger'"
      closable
      divide
    >
      Item has been deleted.
    </toast>
  </div>
</template>
<script setup>
import { Toast } from '../../../../src/index'
</script>
