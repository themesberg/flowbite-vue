<template>
  <div class="vp-raw">
    <fwb-p class="mb-2">
      Selected: <em>{{ picked }}</em>
    </fwb-p>

    <fwb-list-group>
      <fwb-list-group-item
        v-for="option in options"
        :key="option.value"
      >
        <fwb-radio
          v-model="picked"
          :label="option.label"
          name="list-radio"
          :value="option.value"
          wrapper-class="-mx-4 -my-2 w-full px-4 py-2"
        />
      </fwb-list-group-item>
    </fwb-list-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbListGroup, FwbListGroupItem, FwbP, FwbRadio } from '../../../../src/index'

const options = [
  { label: 'Angular', value: 'Angular' },
  { label: 'React', value: 'React' },
  { label: 'Svelte', value: 'Svelte' },
  { label: 'Vue JS', value: 'Vue JS' },
]

const picked = ref('Vue JS')
</script>
