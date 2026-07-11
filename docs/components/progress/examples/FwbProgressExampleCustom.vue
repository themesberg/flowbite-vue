<template>
  <fwb-progress
    :progress="50"
    value-position="inside"
    show-value
    size="lg"
    inner-classes="bg-amber-900 dark:bg-green-200 text-amber-100 dark:text-green-900"
    outer-classes="bg-amber-200 dark:bg-green-900"
    outside-label-classes="font-bold text-amber-900 dark:text-green-200"
    label="Custom"
  />
</template>

<script lang="ts" setup>
import { FwbProgress } from '../../../../src/index'
</script>
