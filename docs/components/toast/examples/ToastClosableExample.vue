<template>
  <div class="vp-raw flex align-center gap-2 flex-wrap flex-col">
    <Toast type="empty" closable>
      You've unlocked achievement.
    </Toast>
    <Toast :type="'warning'" closable>
      Improve password difficulty.
    </Toast>
    <Toast :type="'success'" closable>
      Item moved successfully.
    </Toast>
    <Toast :type="'danger'" closable>
      Item has been deleted.
    </Toast>
  </div>
</template>
<script setup>
import { Toast } from '../../../../src/index'
</script>
