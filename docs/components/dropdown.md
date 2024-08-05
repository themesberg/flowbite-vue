<script setup>
import FwbDropdownExamplePlacement from './dropdown/examples/FwbDropdownExamplePlacement.vue'
import FwbDropdownExampleAlignment from './dropdown/examples/FwbDropdownExampleAlignment.vue'
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
  <fwb-dropdown placement="top" text="Top">
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </fwb-dropdown>
  <fwb-dropdown placement="right" text="Right">
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </fwb-dropdown>
  <fwb-dropdown text="Bottom">
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </fwb-dropdown>
  <fwb-dropdown placement="left" text="Left">
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </fwb-dropdown>
</template>

<script setup>
import { FwbDropdown } from 'flowbite-vue'
</script>
```

## Dropdown - alignment

The property controls how the dropdown is aligned with the trigger

<fwb-dropdown-example-alignment />
```vue
<template>
  <fwb-dropdown placement="top" text="Top" align-to-end>
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </fwb-dropdown>
  <fwb-dropdown placement="right" text="Right" align-to-end>
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </fwb-dropdown>
  <fwb-dropdown text="Bottom" align-to-end>
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </fwb-dropdown>
  <fwb-dropdown placement="left" text="Left" align-to-end>
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
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

## Dropdown - close inside

<fwb-dropdown-example-trigger />
```vue
<template>
  <fwb-dropdown text="Bottom" close-inside>
    <list-group>
      <list-group-item>
        Profile
      </list-group-item>
      <list-group-item>
        Settings
      </list-group-item>
      <list-group-item>
        Messages
      </list-group-item>
      <list-group-item>
        Download
      </list-group-item>
    </list-group>
  </fwb-dropdown>
</template>

<script setup>
import { FwbDropdown, ListGroup, ListGroupItem } from 'flowbite-vue'
</script>
```

## API

### Props
| Name     | Values | Default |
|----------|--------|---------|
| placement | `DropdownPlacement` | `'bottom'`  |
| text | `string` | `''` |
| transition | `string` | `''` |
| closeInside | `boolean` | `false` |
| alignToEnd | `boolean` | `false` |

### Events
| Name | Description            |
|------|------------------------|
| show | the dropdown is opened |
| hide | the dropdown is closed |

### Slots
| Name       | Description       |
|------------|-------------------|
| default    | dropdown content  |
| suffix     | button suffix     |
