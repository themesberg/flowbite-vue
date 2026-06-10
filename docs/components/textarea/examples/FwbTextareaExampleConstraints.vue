<template>
  <form
    class="flex flex-col gap-4 vp-raw"
    @submit.prevent="submitted = true"
  >
    <fwb-textarea
      v-model="message"
      :validation-status="validationStatus"
      label="Message (10–15 characters)"
      minlength="10"
      maxlength="15"
      required
    >
      <template
        v-if="validationStatus === 'error'"
        #validationMessage
      >
        {{ message.length === 0 ? 'This field is required.' : `Too short — ${message.length}/10 characters minimum.` }}
      </template>
      <template
        v-if="validationStatus === 'success'"
        #helper
      >
        Looks good!
      </template>
    </fwb-textarea>
    <fwb-button
      class="self-start"
      type="submit"
    >
      Validate
    </fwb-button>
  </form>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import { FwbButton, FwbTextarea } from '../../../../src/index'

import type { ValidationStatus } from '../../../../src/types/form'

const message = ref('')
const submitted = ref(false)

const validationStatus = computed<ValidationStatus | undefined>(() => {
  if (!submitted.value) return undefined
  return message.value.length >= 10 ? 'success' : 'error'
})
</script>
