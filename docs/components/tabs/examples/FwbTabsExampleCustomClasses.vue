<template>
  <div class="vp-raw">
    <fwb-tabs
      v-model="activeTab"
      tab-class="bg-amber-100 dark:bg-green-900 border-b-2 border-amber-400 dark:border-green-700"
      item-class="font-bold text-amber-800 dark:text-green-300 hover:bg-amber-300 hover:text-amber-900 dark:hover:bg-green-800 dark:hover:text-green-100"
      item-active-class="bg-amber-400 dark:bg-green-700 text-amber-900 dark:text-green-100"
      class="bg-amber-50 dark:bg-green-950 p-5 border-amber-400 border-x-2 dark:border-green-700 border-b-2"
    >
      <fwb-tab
        name="first"
        title="First"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores odio minima temporibus eligendi deleniti vitae illo quo, fuga nobis saepe error totam inventore ullam accusamus, deserunt unde est. Atque.
      </fwb-tab>
      <fwb-tab
        name="second"
        title="Second"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam vero debitis, ex nesciunt illum distinctio, recusandae officiis nisi optio ut alias voluptatibus sint? Delectus dolores consequatur fugit dolore tempora?
      </fwb-tab>
      <fwb-tab
        name="third"
        title="Third"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis soluta consequuntur. Distinctio hic perspiciatis sunt dignissimos non nemo aspernatur eum velit sed accusantium, asperiores maiores laborum facere quibusdam placeat?
      </fwb-tab>
    </fwb-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbTab, FwbTabs } from '../../../../src/index'

const activeTab = ref('first')
</script>
