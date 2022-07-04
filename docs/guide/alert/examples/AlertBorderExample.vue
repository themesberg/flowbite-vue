<template>
  <div class="flex flex-col">
    <Alert type="info" border class="mb-2">Info</Alert>
    <Alert type="warning" border class="mb-2">Warning</Alert>
    <Alert type="danger" border class="mb-2">Danger</Alert>
    <Alert type="dark" border class="mb-2">Dark</Alert>
    <Alert type="success" border>Success</Alert>
  </div>
</template>
<script setup>
import { Alert } from '../../../../src/index'
</script>
