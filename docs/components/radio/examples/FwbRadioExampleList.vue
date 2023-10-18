<template>
  <div class="vp-raw">
    <fwb-p class="mb-2">
      Technology {{ picked }}
    </fwb-p>

    <fwb-list-group>
      <fwb-list-group-item>
        <fwb-radio
          v-model="picked"
          label="Svelte"
          name="list-radio"
          value="Svelte"
        />
      </fwb-list-group-item>
      <fwb-list-group-item>
        <fwb-radio
          v-model="picked"
          label="Vue JS"
          name="list-radio"
          value="Vue JS"
        />
      </fwb-list-group-item>
      <fwb-list-group-item>
        <fwb-radio
          v-model="picked"
          label="React"
          name="list-radio"
          value="React"
        />
      </fwb-list-group-item>
      <fwb-list-group-item>
        <fwb-radio
          v-model="picked"
          label="Angular"
          name="list-radio"
          value="Angular"
        />
      </fwb-list-group-item>
    </fwb-list-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbListGroup, FwbListGroupItem, FwbP, FwbRadio } from '../../../../src/index'

const picked = ref('Vue JS')
</script>
