<script setup>
import FwbDropdownExamplePlacement from './dropdown/examples/FwbDropdownExamplePlacement.vue'
import FwbDropdownExampleAlignment from './dropdown/examples/FwbDropdownExampleAlignment.vue'
import FwbDropdownExampleListGroup from './dropdown/examples/FwbDropdownExampleListGroup.vue'
import FwbDropdownExampleButtonColors from './dropdown/examples/FwbDropdownExampleButtonColors.vue'
import FwbDropdownExampleButtonGroup from './dropdown/examples/FwbDropdownExampleButtonGroup.vue'
import FwbDropdownExampleDisabled from './dropdown/examples/FwbDropdownExampleDisabled.vue'
import FwbDropdownExampleTrigger from './dropdown/examples/FwbDropdownExampleTrigger.vue'
import FwbDropdownExampleCloseInside from './dropdown/examples/FwbDropdownExampleCloseInside.vue'
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
    <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
      <a href="#"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >Dashboard</a>
      <a href="#"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >Settings</a>
      <a href="#"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >Earnings</a>
      <a href="#"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >Sign out</a>
    </nav>
  </fwb-dropdown>

  <fwb-dropdown placement="right" text="Right">
    <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
      ...
    </nav>
  </fwb-dropdown>

<fwb-dropdown text="Bottom">
    <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
      ...
    </nav>
  </fwb-dropdown>

  <fwb-dropdown placement="left" text="Left">
    <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
      ...
    </nav>
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
  <fwb-dropdown align-to-end placement="top" text="Top">
    <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
      <a
        href="#"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >Dashboard</a>
      <a
        href="#"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >Settings</a>
      <a
        href="#"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >Earnings</a>
      <a
        href="#"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >Sign out</a>
    </nav>
  </fwb-dropdown>

  <fwb-dropdown align-to-end placement="right" text="Right">
    <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
      ...
    </nav>
  </fwb-dropdown>

  <fwb-dropdown align-to-end text="Bottom">
    <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
      ...
    </nav>
  </fwb-dropdown>

  <fwb-dropdown align-to-end placement="left" text="Left">
    <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
      ...
    </nav>
  </fwb-dropdown>
</template>

<script setup>
import { FwbDropdown } from 'flowbite-vue'
</script>
```

## Dropdown - with list group

<fwb-dropdown-example-list-group />
```vue
<template>
    <fwb-dropdown text="Menu" content-class="rounded-lg">
      <fwb-list-group class="text-sm text-gray-700 dark:text-gray-200">
        <fwb-list-group-item class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Dashboard
        </fwb-list-group-item>
        <fwb-list-group-item class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Settings
        </fwb-list-group-item>
        <fwb-list-group-item class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Earnings
        </fwb-list-group-item>
        <fwb-list-group-item class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Sign out
        </fwb-list-group-item>
      </fwb-list-group>
    </fwb-dropdown>
</template>

<script setup>
import { FwbDropdown, FwbListGroup, FwbListGroupItem } from 'flowbite-vue'
</script>
```

## Dropdown - button colors

::: tip
Use `triggerClass` prop if you need more control over default trigger button.
:::

<fwb-dropdown-example-button-colors />
```vue
<template>
  <fwb-dropdown text="Default" color="default">
    ...
  </fwb-dropdown>

  <fwb-dropdown text="Alternative" color="alternative">
    ...
  </fwb-dropdown>

  <fwb-dropdown text="Light" color="light">
    ...
  </fwb-dropdown>

  <fwb-dropdown text="Dark" color="dark">
    ...
  </fwb-dropdown>

  <fwb-dropdown text="Green" color="green">
    ...
  </fwb-dropdown>

  <fwb-dropdown text="Pink" color="pink">
    ...
  </fwb-dropdown>

  <fwb-dropdown text="Purple" color="purple">
    ...
  </fwb-dropdown>

  <fwb-dropdown text="Red" color="red">
    ...
  </fwb-dropdown>

  <fwb-dropdown text="Yellow" color="yellow">
    ...
  </fwb-dropdown>
</template>

<script setup>
import { FwbDropdown } from 'flowbite-vue'
</script>
```

## Dropdown - button group

<fwb-dropdown-example-button-group />
```vue
<template>
  <fwb-button-group>
    <fwb-dropdown color="purple" text="Purple">
      <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
        ...
      </nav>
    </fwb-dropdown>
    <fwb-dropdown color="pink" text="Pink">
      <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
        ...
      </nav>
    </fwb-dropdown>
    <fwb-dropdown color="red" text="Red">
      <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
        ...
      </nav>
    </fwb-dropdown>
    <fwb-dropdown color="yellow" text="Yellow">
      <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
        ...
      </nav>
    </fwb-dropdown>
  </fwb-button-group>
</template>

<script setup>
import { FwbDropdown, FwbButtonGroup } from 'flowbite-vue'
</script>
```

## Dropdown - disabled

<fwb-dropdown-example-disabled />
```vue
<template>
  <fwb-dropdown text="Normal state">
    ...
  </fwb-dropdown>

  <fwb-dropdown text="Disabled state" disabled>
    ...
  </fwb-dropdown>
</template>

<script setup>
import { FwbDropdown } from 'flowbite-vue'
</script>
```
::: warning
Please note that when using a custom trigger (via the trigger slot), you'll need to also implement the disabled state manually by passing the disabled prop to your trigger element. You should still use the disabled prop here to ensure correct handling of the disabled state in the dropdown click handler.
:::

## Dropdown - trigger

Use dedicated `#trigger` slot to change trigger element according to your needs.

::: tip
You can use `triggerWrapperClass` prop if you need to change classes on the trigger wrapper element.
:::

<fwb-dropdown-example-trigger />
```vue
<template>
  <fwb-dropdown>
    <template #trigger>
      <fwb-button color="light">
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </fwb-button>
    </template>
    <nav class="py-2 text-sm text-gray-700 dark:text-gray-200">
      ...
    </nav>
  </fwb-dropdown>
</template>

<script setup>
import { FwbDropdown } from 'flowbite-vue'
</script>
```

## Dropdown - close inside

Use `closeInside` prop if you want dropdown to close on click on it's child.

<fwb-dropdown-example-close-inside />
```vue
<template>
  <fwb-dropdown text="Bottom" close-inside>
    <fwb-dropdown
      close-inside
      text="Closes after click on child"
    >
      <nav class="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col">
        <span class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</span>
        <span class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</span>
        <span class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</span>
        <span class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</span>
      </nav>
    </fwb-dropdown>
  </fwb-dropdown>
</template>

<script setup>
import { FwbDropdown } from 'flowbite-vue'
</script>
```

## API

### Props
| Name                | Description                                                                          | Values                                                                                        | Default                                 |
| ------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | --------------------------------------- |
| alignToEnd          | Reverses the alignment of the dropdown content                                       | Boolean                                                                                       | `false`                                 |
| class               | Allows adding or overriding classes on the main dropdown wrapper                     | String                                                                                        | `''`                                    |
| closeInside         | Allows closing the dropdown when clicking inside the contentWrapper                  | Boolean                                                                                       | `false`                                 |
| color               | Button Variant<br>_(for default trigger)_                                            | `default`, `alternative`, `dark`, `light`, `green`, `red`, `yellow`, `purple`, `pink`, `blue` | `default`                               |
| contentWrapperClass | Allows adding or overriding classes on the content wrapper                           | String                                                                                        | `''`                                    |
| disabled            | Button state<br>_(for default trigger)_                                              | Boolean                                                                                       | `false`                                 |
| placement           | Alignment of dropdown content                                                        | `top`, `right`, `bottom`, `left`                                                              | `bottom`                                |
| text                | Button label<br>_(for default trigger)_                                              | String                                                                                        | `Dropdown`                              |
| transition          | Custom transition name<br>_(requires custom transitions in CSS)_                     | String                                                                                        | Calculated based on current `placement` |
| triggerClass        | Allows adding or overriding classes on the trigger button<br>_(for default trigger)_ | String                                                                                        | `''`                                    |
| triggerWrapperClass | Allows adding or overriding classes on the trigger wrapper                           | String                                                                                        | `''`                                    |



### Events
| Name | Description                 |
| ---- | --------------------------- |
| show | When the dropdown is opened |
| hide | When the dropdown is closed |

### Slots
| Name    | Description                                |
| ------- | ------------------------------------------ |
| trigger | replace button with custom trigger element |
| default | dropdown content                           |
