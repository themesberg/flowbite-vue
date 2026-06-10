<template>
  <div class="flex flex-col gap-4 vp-raw">
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbTextarea } from '../../../../src/index'

const message = ref('Some content')
</script>
