<template>
  <div class="flex flex-col gap-4 vp-raw">
    <fwb-textarea
      v-model="message"
      validation-status="error"
      label="Your message"
      placeholder="Write your message..."
    >
      <template #validationMessage>
        This field is required.
      </template>
    </fwb-textarea>
    <fwb-textarea
      v-model="message"
      validation-status="success"
      label="Your message"
      placeholder="Write your message..."
    >
      <template #helper>
        Looks good!
      </template>
    </fwb-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbTextarea } from '../../../../src/index'

const message = ref('')
</script>
