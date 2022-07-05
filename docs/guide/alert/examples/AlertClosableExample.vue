<template>
  <div class="vp-raw flex flex-col">
    <Alert type="info" closable class="mb-2">Info</Alert>
    <Alert type="warning" closable class="mb-2">Warning</Alert>
    <Alert type="danger" closable class="mb-2">Danger</Alert>
    <Alert type="dark" closable class="mb-2">Dark</Alert>
    <Alert type="success" closable>Success</Alert>
  </div>
</template>
<script setup>
import { Alert } from '../../../../src/index'
</script>
