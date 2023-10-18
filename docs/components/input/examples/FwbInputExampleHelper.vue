<template>
  <div class="vp-raw">
    <fwb-input
      v-model="name"
      label="First name"
      placeholder="enter your first name"
    >
      <template #helper>
        We'll never share your details. Read our
        <fwb-a
          href="#"
          color="text-blue-600 dark:text-blue-500"
        >
          Privacy Policy
        </fwb-a>.
      </template>
    </fwb-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbA, FwbInput } from '../../../../src/index'

const name = ref('')
</script>
