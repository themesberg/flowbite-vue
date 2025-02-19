<template>
  <div class="vp-raw">
    <span class="">Select theme:</span>
    <div class="xs:grid-cols-5 mb-5 mt-2 grid md:grid-cols-7">
      <fwb-radio
        v-model="activeTheme"
        value="blue"
      >
        Blue
      </fwb-radio>
      <fwb-radio
        v-model="activeTheme"
        value="green"
      >
        Green
      </fwb-radio>
      <fwb-radio
        v-model="activeTheme"
        value="pink"
      >
        Pink
      </fwb-radio>
      <fwb-radio
        v-model="activeTheme"
        value="purple"
      >
        Purple
      </fwb-radio>
      <fwb-radio
        v-model="activeTheme"
        value="red"
      >
        Red
      </fwb-radio>
    </div>
    <div class="inline-flex flex-wrap gap-2">
      <flowbite-themable :theme="activeTheme">
        <fwb-dropdown>
          <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Dashboard</a>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Settings</a>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Earnings</a>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Sign out</a>
          </nav>
        </fwb-dropdown>
      </flowbite-themable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FlowbiteThemable, FwbDropdown, FwbRadio } from '../../../../src/index'

import type { FlowbiteTheme } from '../../../../src/components/utils/FlowbiteThemable/types'

const activeTheme = ref<FlowbiteTheme>('blue')
</script>
