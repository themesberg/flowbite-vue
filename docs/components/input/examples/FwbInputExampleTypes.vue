<template>
  <div class="gap-2 grid vp-raw">
    <fwb-input
      v-model="email"
      label="Email"
      placeholder="name@example.com"
      type="email"
    />
    <fwb-input
      v-model="password"
      label="Password"
      placeholder="••••••••"
      type="password"
    />
    <fwb-input
      v-model="number"
      label="Number"
      placeholder="123"
      type="number"
    />
    <fwb-input
      v-model="phone"
      label="Phone number"
      placeholder="+1 (555) 000-0000"
      type="tel"
    />
    <fwb-input
      v-model="url"
      label="URL"
      placeholder="https://example.com"
      type="url"
    />
    <fwb-input
      v-model="search"
      label="Search"
      placeholder="Search..."
      type="search"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbInput } from '../../../../src/index'

const email = ref('')
const number = ref('')
const password = ref('')
const phone = ref('')
const search = ref('')
const url = ref('')
</script>
