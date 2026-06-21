<script setup>
import { defineClientComponent } from 'vitepress'

const FwbDropdownExamplePlacement = defineClientComponent(() => {
  return import('./dropdown/examples/FwbDropdownExamplePlacement.vue')
})
const FwbDropdownExampleAlignment = defineClientComponent(() => {
  return import('./dropdown/examples/FwbDropdownExampleAlignment.vue')
})
const FwbDropdownExampleListGroup = defineClientComponent(() => {
  return import('./dropdown/examples/FwbDropdownExampleListGroup.vue')
})
const FwbDropdownExampleButtonColors = defineClientComponent(() => {
  return import('./dropdown/examples/FwbDropdownExampleButtonColors.vue')
})
const FwbDropdownExampleButtonGroup = defineClientComponent(() => {
  return import('./dropdown/examples/FwbDropdownExampleButtonGroup.vue')
})
const FwbDropdownExampleDisabled = defineClientComponent(() => {
  return import('./dropdown/examples/FwbDropdownExampleDisabled.vue')
})
const FwbDropdownExampleTrigger = defineClientComponent(() => {
  return import('./dropdown/examples/FwbDropdownExampleTrigger.vue')
})
const FwbDropdownExampleCloseInside = defineClientComponent(() => {
  return import('./dropdown/examples/FwbDropdownExampleCloseInside.vue')
})
</script>

# Dropdown - Flowbite Vue

#### Get started with the dropdown component to show a list of menu items when clicking on the trigger element based on multiple layouts, styles, and placements

---

:::tip Dropdown - Flowbite
Original reference: [https://flowbite.com/docs/components/dropdowns/](https://flowbite.com/docs/components/dropdowns/)
:::

The dropdown component can be used to show a list of menu items when clicking on an element such as a button, and hiding it when clicking outside of the triggering element.

## Placement

Use the `placement` prop to control which side of the trigger the dropdown panel opens on. Accepted values are `top`, `right`, `bottom` (default), and `left`.

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

## Alignment

Add the `align-to-end` prop to align the dropdown panel to the far edge of the trigger instead of the near edge.

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

## With List Group

Use `FwbListGroup` and `FwbListGroupItem` inside the dropdown for a styled menu that supports links, router links, and click handlers.

<fwb-dropdown-example-list-group />

```vue
<template>
  <fwb-dropdown text="Menu" content-class="rounded-lg">
    <fwb-list-group class="text-sm text-gray-700 dark:text-gray-200">
      <fwb-list-group-item to="#">
        Dashboard
      </fwb-list-group-item>
      <fwb-list-group-item href="#">
        Settings
      </fwb-list-group-item>
      <fwb-list-group-item href="#">
        Earnings
      </fwb-list-group-item>
      <fwb-list-group-item @click="signOut">
        Sign out
      </fwb-list-group-item>
    </fwb-list-group>
  </fwb-dropdown>
</template>

<script setup>
import { FwbDropdown, FwbListGroup, FwbListGroupItem } from 'flowbite-vue'
</script>
```

## Button Colors

Use the `color` prop to change the trigger button colour. Use `triggerClass` for more granular control over the trigger button's classes.

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

## In a Button Group

Place `FwbDropdown` inside `FwbButtonGroup` to mix dropdowns with regular buttons in a single joined control.

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

## Disabled

Add the `disabled` prop to prevent the trigger button from opening the dropdown panel.

:::warning
When using a custom trigger via the `#trigger` slot, you must also apply `disabled` to your trigger element manually. The `disabled` prop still ensures correct handling of the click state in the dropdown logic.
:::

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

## Custom Trigger

Use the `#trigger` slot to replace the default button with any element. Use `triggerWrapperClass` to style the wrapper around the trigger.

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

## Close Inside

Add the `close-inside` prop to close the dropdown automatically when the user clicks anywhere inside the content panel.

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

## Dropdown component API

### FwbDropdown Props

| Name                | Type                                                                                      | Default    | Description                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------- |
| alignToEnd          | `Boolean`                                                                                 | `false`    | Aligns the dropdown panel to the far edge of the trigger.                    |
| class               | `String`                                                                                  | `''`       | Additional classes applied to the dropdown wrapper element.                  |
| closeInside         | `Boolean`                                                                                 | `false`    | Closes the dropdown when clicking anywhere inside the content panel.         |
| color               | `'default' \| 'alternative' \| 'dark' \| 'light' \| 'green' \| 'red' \| 'yellow' \| 'purple' \| 'pink' \| 'blue'` | `'default'` | Colour of the default trigger button. |
| contentWrapperClass | `String`                                                                                  | `''`       | Additional classes applied to the content panel wrapper.                     |
| disabled            | `Boolean`                                                                                 | `false`    | Disables the default trigger button and prevents the panel from opening.     |
| placement           | `'top' \| 'right' \| 'bottom' \| 'left'`                                                 | `'bottom'` | Which side of the trigger the panel opens on.                                |
| text                | `String`                                                                                  | `'Dropdown'` | Label text for the default trigger button.                                 |
| transition          | `String`                                                                                  | `''`       | Custom Vue transition name. Defaults to a value calculated from `placement`. |
| triggerClass        | `String`                                                                                  | `''`       | Additional classes applied to the default trigger button.                    |
| triggerWrapperClass | `String`                                                                                  | `''`       | Additional classes applied to the trigger wrapper element.                   |

### FwbDropdown Events

| Name | Description                       |
| ---- | --------------------------------- |
| show | Emitted when the dropdown opens.  |
| hide | Emitted when the dropdown closes. |

### FwbDropdown Slots

| Name    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| default | The dropdown panel content.                                    |
| trigger | Custom trigger element that replaces the default button.       |
