<script setup>
import FlowbiteThemableTabsPillsExample from './examples/tabs/FlowbiteThemableTabsPillsExample.vue';
import FlowbiteThemableTabsUnderlineExample from './examples/tabs/FlowbiteThemableTabsUnderlineExample.vue';
import FlowbiteThemableTabsDefaultExample from './examples/tabs/FlowbiteThemableTabsDefaultExample.vue';
import FlowbiteThemableDropdownExample from './examples/dropdown/FlowbiteThemableDropdownExample.vue';
import FlowbiteThemableButtonExample from './examples/button/FlowbiteThemableButtonExample.vue';
</script>

# Vue Themable Configuration - Flowbite

You can use this wrapper for styling components with no color prop(like tabs, dropdown etc.)

:::warning
WIP, Do not use it in production
:::

## Tabs

```vue
<script setup>
import { Tabs, Tab, FlowbiteThemable } from 'flowbite-vue'
const theme = 'blue' // 'blue', 'green', 'red', 'pink', 'purple'
const variant = 'default' // see tabs docs
</script>
<template>
  <flowbite-themable :theme="theme">
      <tabs :variant="variant" class="p-5">
        ...
      </tabs>
  </flowbite-themable>
</template>
```

### **variant: pills**
---
<FlowbiteThemableTabsPillsExample theme="blue" />

<FlowbiteThemableTabsPillsExample theme="green" />

<FlowbiteThemableTabsPillsExample theme="pink" />

<FlowbiteThemableTabsPillsExample theme="purple" />

<FlowbiteThemableTabsPillsExample theme="red" />

### **variant: underline**
---
<FlowbiteThemableTabsUnderlineExample theme="blue" />

<FlowbiteThemableTabsUnderlineExample theme="green" />

<FlowbiteThemableTabsUnderlineExample theme="pink" />

<FlowbiteThemableTabsUnderlineExample theme="purple" />

<FlowbiteThemableTabsUnderlineExample theme="red" />

### **variant: default**
---
<FlowbiteThemableTabsDefaultExample theme="blue" />

<FlowbiteThemableTabsDefaultExample theme="green" />

<FlowbiteThemableTabsDefaultExample theme="pink" />

<FlowbiteThemableTabsDefaultExample theme="purple" />

<FlowbiteThemableTabsDefaultExample theme="red" />

## Dropdown

```vue
<script setup>
import { Dropdown, FlowbiteThemable } from 'flowbite-vue'
const theme = 'blue' // 'blue', 'green', 'red', 'pink', 'purple'
</script>
<template>
  <flowbite-themable :theme="theme">
      <dropdown>
        ...
      </dropdown>
  </flowbite-themable>
</template>
```

<FlowbiteThemableDropdownExample theme="blue" class="mb-2" />

<FlowbiteThemableDropdownExample theme="green" class="mb-2" />

<FlowbiteThemableDropdownExample theme="pink" class="mb-2" />

<FlowbiteThemableDropdownExample theme="purple" class="mb-2" />

<FlowbiteThemableDropdownExample theme="red" />

## Button

```vue
<script setup>
import { Button, FlowbiteThemable } from 'flowbite-vue'
const theme = 'blue' // 'blue', 'green', 'red', 'pink', 'purple'
</script>
<template>
  <flowbite-themable :theme="theme">
      <Button>
        ...
      </Button>
  </flowbite-themable>
</template>
```

<FlowbiteThemableButtonExample />
