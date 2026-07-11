<template>
  <div class="vp-raw">
    <fwb-tabs
      v-model="activeTab"
      class="p-5"
    >
      <fwb-tab
        name="profile"
        title="Profile"
      >
        <template #icon>
          <svg
            class="size-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores odio minima temporibus eligendi deleniti vitae illo quo, fuga nobis saepe error totam inventore ullam accusamus, deserunt unde est. Atque.
      </fwb-tab>
      <fwb-tab
        name="settings"
        title="Settings"
      >
        <template #icon>
          <svg
            class="size-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2a1.5 1.5 0 0 0-1.5-1.5h-2a1.5 1.5 0 0 0-1.5 1.5v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
          </svg>
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam vero debitis, ex nesciunt illum distinctio, recusandae officiis nisi optio ut alias voluptatibus sint? Delectus dolores consequatur fugit dolore tempora?
      </fwb-tab>
      <fwb-tab
        name="contacts"
        title="Contacts"
      >
        <template #icon>
          <svg
            class="size-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis soluta consequuntur. Distinctio hic perspiciatis sunt dignissimos non nemo aspernatur eum velit sed accusantium, asperiores maiores laborum facere quibusdam placeat?
      </fwb-tab>
      <fwb-tab
        name="disabled"
        title="Disabled"
        disabled
      >
        <template #icon>
          <svg
            class="size-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
          </svg>
        </template>
        Disabled content
      </fwb-tab>
    </fwb-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbTab, FwbTabs } from '../../../../src/index'

const activeTab = ref('profile')
</script>
