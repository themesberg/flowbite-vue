<template>
  <div class="vp-raw flex flex-col">
    <Alert type="info" class="mb-2">Info</Alert>
    <Alert type="warning" class="mb-2">Warning</Alert>
    <Alert type="danger" class="mb-2">Danger</Alert>
    <Alert type="dark" class="mb-2">Dark</Alert>
    <Alert type="success">Success</Alert>
  </div>
</template>
<script setup>
import { Alert } from '../../../../src/index'
</script>
