<script setup>
import FlowbiteThemableTabsPillsExample from './examples/tabs/FlowbiteThemableTabsPillsExample.vue';
import FlowbiteThemableTabsUnderlineExample from './examples/tabs/FlowbiteThemableTabsUnderlineExample.vue';
import FlowbiteThemableTabsDefaultExample from './examples/tabs/FlowbiteThemableTabsDefaultExample.vue';
</script>

# Flowbite Themable

You can use this wrapper for styling components with no color prop(like tabs, dropdown etc.)

## Tabs

```vue
<script setup>
import {Tabs, Tab, FlowbiteThemable} from 'flowbite-vue'
const theme = 'blue' // 'blue', 'green', 'red', 'pink', 'purple'
const variant = 'default' // see tabs docs
</script>
<template>
  <flowbite-themable :theme="theme" theme="blue">
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