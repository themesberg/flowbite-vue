<template>
  <div class="flex gap-2 vp-raw">
    <fwb-input
      v-model="website"
      label="Website URL"
      placeholder="flowbite.com"
      wrapper-class="w-full"
    >
      <template #prefix>
        https://
      </template>
    </fwb-input>
    <fwb-input
      v-model="retentionRate"
      label="Retention Rate"
      type="number"
      input-class="text-right"
      step="0.01"
      wrapper-class="w-full"
    >
      <template #suffix>
        %
      </template>
    </fwb-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbInput } from '../../../../src/index'

const retentionRate = ref(98.76)
const website = ref('')
</script>
