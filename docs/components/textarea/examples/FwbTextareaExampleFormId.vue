<template>
  <div class="flex flex-col gap-y-4">
    <form
      id="fwb-textarea-example-form-id"
      class="vp-raw"
      @submit.prevent
    >
      <fwb-input
        v-model="inputMessage"
        label="Input inside the form"
        placeholder="Write your message..."
      />
      <fwb-button
        class="mt-2"
        type="submit"
      >
        Validate
      </fwb-button>
    </form>
    <fwb-textarea
      v-model="textareaMessage"
      label="Textarea outside the form"
      form="fwb-textarea-example-form-id"
      minlength="20"
      required
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbButton, FwbInput, FwbTextarea } from '../../../../src/index'

const inputMessage = ref('')
const textareaMessage = ref('')
</script>
