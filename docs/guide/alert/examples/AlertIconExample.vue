<template>
  <div class="flex flex-col">
    <Alert type="info" :icon="false" class="mb-2">Info</Alert>
    <Alert title="WARNING" type="warning" :icon="false" class="mb-2">Warning</Alert>
    <Alert type="danger" :icon="false" class="mb-2">Danger</Alert>
    <Alert type="dark" :icon="false" class="mb-2">Dark</Alert>
    <Alert type="success" :icon="false">Success</Alert>
  </div>
</template>
<script setup>
import { Alert } from '../../../../src/index'
</script>
