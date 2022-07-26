<template>
  <div class="vp-raw flex align-center gap-2 flex-wrap flex-col">
    <Toast type="empty" closable divide>
      You've unlocked achievement.
    </Toast>
    <Toast :type="'warning'" closable divide>
      Improve password difficulty.
    </Toast>
    <Toast :type="'success'" closable divide>
      Item moved successfully.
    </Toast>
    <Toast :type="'danger'" closable divide>
      Item has been deleted.
    </Toast>
  </div>
</template>
<script setup>
import { Toast } from '../../../../src/index'
</script>
