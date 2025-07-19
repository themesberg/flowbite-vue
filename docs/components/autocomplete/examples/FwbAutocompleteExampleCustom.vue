<template>
  <div class="vp-raw">
    <fwb-autocomplete
      v-model="selectedUser"
      :options="users"
      :search-fields="['name', 'email']"
      display="name"
      label="Select user"
      placeholder="Search users..."
    >
      <template #option="{ option }">
        <div class="flex items-center">
          <img
            :src="option.avatar"
            :alt="option.name"
            class="w-8 h-8 rounded-full mr-3"
          >
          <div>
            <div class="font-medium">
              {{ option.name }}
            </div>
            <div class="text-sm text-gray-500">
              {{ option.email }}
            </div>
          </div>
        </div>
      </template>
    </fwb-autocomplete>
    <div
      v-if="selectedUser"
      class="mt-4 p-3 bg-gray-50 rounded"
    >
      <div class="flex items-center">
        <img
          :src="selectedUser.avatar"
          :alt="selectedUser.name"
          class="w-10 h-10 rounded-full mr-3"
        >
        <div>
          <div class="font-medium">
            {{ selectedUser.name }}
          </div>
          <div class="text-sm text-gray-500">
            {{ selectedUser.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbAutocomplete } from '../../../../src/index'

const selectedUser = ref(null)
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
]
</script>
