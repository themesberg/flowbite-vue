<template>
  <div class="vp-raw flex flex-col">
    <Alert type="info" class="mb-2">Info alert! Change a few things up and try submitting again. </Alert>
    <Alert type="warning" class="mb-2"> Warning alert! Change a few things up and try submitting again. </Alert>
    <Alert type="danger" class="mb-2">Danger alert! Change a few things up and try submitting again. </Alert>
    <Alert type="dark" class="mb-2"> Dark alert! Change a few things up and try submitting again. </Alert>
    <Alert type="success"> Success alert! Change a few things up and try submitting again. </Alert>
  </div>
</template>
<script setup>
import { Alert } from '../../../../src/index'
</script>
