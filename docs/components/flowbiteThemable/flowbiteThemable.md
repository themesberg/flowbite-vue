<script setup>
import { defineClientComponent } from 'vitepress'

import FlowbiteThemableExampleTabs from './examples/FlowbiteThemableExampleTabs.vue'
import FlowbiteThemableExampleButton from './examples/FlowbiteThemableExampleButton.vue'

const FlowbiteThemableExampleDropdown = defineClientComponent(() => {
  return import('./examples/FlowbiteThemableExampleDropdown.vue')
})
</script>

# Themable Configuration - Flowbite Vue

Use `FlowbiteThemable` to apply a theme color to child components that don't expose a direct `color` prop, or to propagate a shared theme across a group of components.

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
