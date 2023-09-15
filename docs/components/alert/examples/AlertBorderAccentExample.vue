<template>
  <div class="vp-raw flex flex-col">
    <Alert type="info" icon class="mb-2 border-t-4 rounded-none">Info alert! Change a few things up and try submitting again. </Alert>
    <Alert type="warning" icon class="mb-2 border-t-4 rounded-none">Warning alert! Change a few things up and try submitting again. </Alert>
    <Alert type="danger" icon class="mb-2 border-t-4 rounded-none"> Info Danger alert! Change a few things up and try submitting again. </Alert>
    <Alert type="dark" icon class="mb-2 border-t-4 rounded-none"> Info Dark alert! Change a few things up and try submitting again. </Alert>
    <Alert type="success" icon class="border-t-4 rounded-none">Success alert! Change a few things up and try submitting again. </Alert>
  </div>
</template>
<script setup>
import { Alert } from '../../../../src/index'
</script>
