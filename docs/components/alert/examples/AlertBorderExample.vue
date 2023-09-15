<template>
  <div class="vp-raw flex flex-col">
    <Alert type="info" border icon class="mb-2">Info alert! Change a few things up and try submitting again. </Alert>
    <Alert type="warning" border icon class="mb-2">Warning alert! Change a few things up and try submitting again. </Alert>
    <Alert type="danger" border icon class="mb-2"> Info Danger alert! Change a few things up and try submitting again. </Alert>
    <Alert type="dark" border icon class="mb-2"> Info Dark alert! Change a few things up and try submitting again. </Alert>
    <Alert type="success" border icon>Success alert! Change a few things up and try submitting again. </Alert>
  </div>
</template>
<script setup>
import { Alert } from '../../../../src/index'
</script>
