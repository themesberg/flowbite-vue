<template>
  <fwb-progress
    :progress="50"
    :inner-classes="'rounded-xs bg-teal-900 dark:bg-teal-200'"
    :outer-classes="'bg-teal-200 dark:bg-teal-900'"
    :outside-label-classes="'italic text-sky-800 dark:text-sky-200'"
    label="Custom"
  />
</template>

<script lang="ts" setup>
import { FwbProgress } from '../../../../src/index'
</script>
