<template>
  <div class="vp-raw flex align-center gap-2 flex-wrap flex-col">
    <toast
      type="empty"
      closable
    >
      You've unlocked achievement.
    </toast>
    <toast
      :type="'warning'"
      closable
    >
      Improve password difficulty.
    </toast>
    <toast
      :type="'success'"
      closable
    >
      Item moved successfully.
    </toast>
    <toast
      :type="'danger'"
      closable
    >
      Item has been deleted.
    </toast>
  </div>
</template>
<script setup>
import { Toast } from '../../../../src/index'
</script>
