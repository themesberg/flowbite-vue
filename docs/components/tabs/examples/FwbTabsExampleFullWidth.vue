<template>
  <div class="vp-raw">
    <fwb-tabs
      v-model="activeTab"
      :full-width="true"
      class="p-5"
    >
      <fwb-tab
        name="profile"
        title="Profile"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores odio minima temporibus eligendi deleniti vitae illo quo, fuga nobis saepe error totam inventore ullam accusamus, deserunt unde est. Atque.
      </fwb-tab>
      <fwb-tab
        name="settings"
        title="Settings"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam vero debitis, ex nesciunt illum distinctio, recusandae officiis nisi optio ut alias voluptatibus sint? Delectus dolores consequatur fugit dolore tempora?
      </fwb-tab>
      <fwb-tab
        name="contacts"
        title="Contacts"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis soluta consequuntur. Distinctio hic perspiciatis sunt dignissimos non nemo aspernatur eum velit sed accusantium, asperiores maiores laborum facere quibusdam placeat?
      </fwb-tab>
      <fwb-tab
        name="disabled"
        title="Disabled"
        disabled
      >
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
