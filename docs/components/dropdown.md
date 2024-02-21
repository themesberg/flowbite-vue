<script setup>
import FwbDropdownExamplePlacement from './dropdown/examples/FwbDropdownExamplePlacement.vue'
import FwbDropdownExampleListGroup from './dropdown/examples/FwbDropdownExampleListGroup.vue'
import FwbDropdownExampleTrigger from './dropdown/examples/FwbDropdownExampleTrigger.vue'
</script>

# Vue Dropdown - Flowbite

#### Get started with the dropdown component to show a list of menu items when clicking on the trigger element based on multiple layouts, styles, and placements

---

:::tip
Original reference: [https://flowbite.com/docs/components/dropdowns/](https://flowbite.com/docs/components/dropdowns/)
:::

The dropdown component can be used to show a list of menu items when clicking on an element such as a button and hiding it when focusing outside of the triggering element.

## Dropdown - placement

<fwb-dropdown-example-placement />
```vue
<template>
  <fwb-dropdown text="Bottom">
    <p class="p-2">Dropdown content here</p>
  </fwb-dropdown>
  <fwb-dropdown placement="top" text="Top">
    <p class="p-2">Dropdown content here</p>
  </fwb-dropdown>
  <fwb-dropdown placement="right" text="Right">
    <p class="p-2">Dropdown content here</p>
  </fwb-dropdown>
  <fwb-dropdown placement="left" text="Left">
    <p class="p-2">Dropdown content here</p>
  </fwb-dropdown>
</template>

<script setup>
import { FwbDropdown } from 'flowbite-vue'
</script>
```

## Dropdown with List Group

<fwb-dropdown-example-list-group />
```vue
<template>
  <fwb-dropdown text="Menu">
    <fwb-list-group>
      <fwb-list-group-item>
        Profile
      </fwb-list-group-item>
      <fwb-list-group-item>
        Settings
      </fwb-list-group-item>
      <fwb-list-group-item>
        Messages
      </fwb-list-group-item>
      <fwb-list-group-item>
        Download
      </fwb-list-group-item>
    </fwb-list-group>
  </fwb-dropdown>
</template>

<script setup>
import { FwbDropdown, FwbListGroup, FwbListGroupItem } from 'flowbite-vue'
</script>
```

## Dropdown - trigger

<fwb-dropdown-example-trigger />
```vue
<template>
  <fwb-dropdown>
    <template #trigger>
      <span>Custom Trigger Element</span>
    </template>
    <fwb-list-group>
      <fwb-list-group-item>
        Profile
      </fwb-list-group-item>
      <fwb-list-group-item>
        Settings
      </fwb-list-group-item>
      <fwb-list-group-item>
        Messages
      </fwb-list-group-item>
      <fwb-list-group-item>
        Download
      </fwb-list-group-item>
    </fwb-list-group>
  </fwb-dropdown>
</template>

<script setup>
import { FwbDropdown, FwbListGroup, FwbListGroupItem } from 'flowbite-vue'
</script>
```
