<template>
  <div class="vp-raw flex flex-col">
    <Alert type="info" title="Some info title" class="mb-2">Info</Alert>
    <Alert type="warning" title="Some warning title" class="mb-2">Warning</Alert>
    <Alert type="danger" title="Some danger title" class="mb-2">Danger</Alert>
    <Alert type="dark" title="Some dark title" class="mb-2">Dark</Alert>
    <Alert type="success" title="Some success title">Success</Alert>
  </div>
</template>
<script setup>
import { Alert } from '../../../../src/index'
</script>
