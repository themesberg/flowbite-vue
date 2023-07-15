<template>
  <div class='flex flex-col gap-5'>
    <FileInput size="xs" label="Small size" />
    <FileInput size="sm" label="Default size" />
    <FileInput size="lg" label="Large size" />
  </div>
</template>

<script setup>
import FileInput from '../../../../src/components/FileInput/FileInput.vue'

</script>
