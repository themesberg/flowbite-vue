<template>
  <div class="vp-raw flex flex-col">
    <Alert type="info" closable icon class="mb-2">Info</Alert>
    <Alert type="warning" closable icon class="mb-2">Warning</Alert>
    <Alert type="danger" closable icon class="mb-2">Danger</Alert>
    <Alert type="dark" closable icon class="mb-2">Dark</Alert>
    <Alert type="success" closable icon>Success</Alert>
  </div>
</template>
<script setup>
import { Alert } from '../../../../src/index'
</script>
