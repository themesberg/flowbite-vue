<template>
  <div class="flex flex-col gap-4 vp-raw">
    <fwb-textarea
      v-model="message"
      validation-status="error"
      validation-message="This field is required."
      label="Your message"
      placeholder="Write your message..."
    />
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
