<template>
  <div class="vp-raw">
    <flowbite-themable :theme="theme">
      <fwb-tabs
        v-model="activeTab"
        variant="pills"
        class="p-5"
      >
        <fwb-tab
          name="first"
          title="First"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?
        </fwb-tab>
        <fwb-tab
          name="second"
          title="Second"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.
        </fwb-tab>
        <fwb-tab
          name="third"
          title="Third"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.
        </fwb-tab>
        <fwb-tab
          name="fourth"
          title="Fourth"
          :disabled="true"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis cupiditate ea error eveniet hic impedit in labore maxime, minima mollitia nam sapiente sint tempora tempore vel velit veniam, voluptatem.
        </fwb-tab>
      </fwb-tabs>
    </flowbite-themable>
  </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import { ref } from 'vue'
import { FlowbiteThemable, FwbTab, FwbTabs } from '../../../../../src/index'
import type { FlowbiteTheme } from '../../../../../src/components/utils/FlowbiteThemable/types'
const activeTab = ref('first')

defineProps({
  theme: {
    type: String as PropType<FlowbiteTheme>,
    default: 'blue',
  },
})
</script>
