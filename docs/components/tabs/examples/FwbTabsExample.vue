<template>
  <div class="vp-raw">
    <fwb-tabs
      v-model="activeTab"
      class="p-5"
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
      <fwb-tab
        name="fourth"
        title="Fourth"
        disabled
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus tenetur officiis aspernatur, ipsam dolorem rerum doloribus? Maxime, aliquid accusamus ad eaque odit dolore doloremque blanditiis natus magnam possimus labore!
      </fwb-tab>
    </fwb-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from '../../../../src/index'

const activeTab = ref('first')
</script>
