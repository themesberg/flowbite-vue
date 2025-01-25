<template>
  <fwb-checkbox v-model="check">
    <fwb-a href="#">
      I agree with the terms and conditions.
    </fwb-a>
  </fwb-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbA, FwbCheckbox } from '../../../../src/index'

const check = ref(false)
</script>
