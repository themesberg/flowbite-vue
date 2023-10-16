<script setup>
import FlowbiteThemableExampleTabs from './examples/FlowbiteThemableExampleTabs.vue'
import FlowbiteThemableExampleButton from './examples/FlowbiteThemableExampleButton.vue'
import FlowbiteThemableExampleDropdown from './examples/FlowbiteThemableExampleDropdown.vue'
</script>

# Vue Themable Configuration - Flowbite

You can use this wrapper for styling components with no color prop(like tabs, dropdown etc.)

:::warning
WIP, Do not use it in production
:::

## Tabs

<flowbite-themable-example-tabs />
```vue
<template>
  <flowbite-themable :theme="theme">
      <fwb-tabs :variant="variant">
        ...
      </fwb-tabs>
  </flowbite-themable>
</template>

<script setup>
import { FwbTabs, FwbTab, FlowbiteThemable } from 'flowbite-vue'
const theme = 'blue' // 'blue', 'green', 'red', 'pink', 'purple'
const variant = 'default' // see tabs docs
</script>
```

### variant: pills
---
<flowbite-themable-example-tabs tabs-variant="pills" />
---

### variant: underline
---
<flowbite-themable-example-tabs tabs-variant="underline" />
---

## Dropdown

<flowbite-themable-example-dropdown />
```vue
<template>
  <flowbite-themable :theme="theme">
      <fwb-dropdown>
        ...
      </fwb-dropdown>
  </flowbite-themable>
</template>

<script setup>
import { FwbDropdown, FlowbiteThemable } from 'flowbite-vue'
const theme = 'blue' // 'blue', 'green', 'red', 'pink', 'purple'
</script>
```

## Button

<flowbite-themable-example-button />
```vue
<template>
  <flowbite-themable :theme="theme">
      <fwb-button>
        ...
      </fwb-button>
  </flowbite-themable>
</template>

<script setup>
import { FwbButton, FlowbiteThemable } from 'flowbite-vue'
const theme = 'blue' // 'blue', 'green', 'red', 'pink', 'purple'
</script>
```
