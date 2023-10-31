<template>
  <form
    class="vp-raw"
    @submit.prevent
  >
    <fwb-textarea
      v-model="message"
      label="Textarea with minlength 10 and maxlength 20"
      minlength="10"
      maxlength="20"
      required
    />
    <fwb-textarea
      v-model="message"
      label="Disabled textarea"
      placeholder="Cannot be edited"
      disabled
    />
    <fwb-textarea
      v-model="message"
      label="Readonly textarea"
      placeholder="Cannot be edited"
      readonly
    />
    <fwb-button type="submit">
      Validate
    </fwb-button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { FwbButton, FwbTextarea } from '../../../../src/index'

const message = ref('Edit me!')
</script>
