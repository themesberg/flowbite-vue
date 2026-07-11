<script setup>
import FwbTabsExample from './tabs/examples/FwbTabsExample.vue'
import FwbTabsExampleInteraction from './tabs/examples/FwbTabsExampleInteraction.vue'
import FwbTabsExampleDirective from './tabs/examples/FwbTabsExampleDirective.vue'
import FwbTabsExamplePills from './tabs/examples/FwbTabsExamplePills.vue'
import FwbTabsExampleUnderline from './tabs/examples/FwbTabsExampleUnderline.vue'
import FwbTabsExampleCustomClasses from './tabs/examples/FwbTabsExampleCustomClasses.vue'
import FwbTabsExampleIcons from './tabs/examples/FwbTabsExampleIcons.vue'
import FwbTabsExampleVertical from './tabs/examples/FwbTabsExampleVertical.vue'
import FwbTabsExampleFullWidth from './tabs/examples/FwbTabsExampleFullWidth.vue'
</script>

# Tabs - Flowbite Vue

#### Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container

---

:::tip Tabs - Flowbite
Original reference: [https://flowbite.com/docs/components/tabs/](https://flowbite.com/docs/components/tabs/)
:::

The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.

## Default

Use `FwbTabs` with `v-model` bound to a tab name and nest `FwbTab` components inside. Each `FwbTab` requires a unique `name` and a `title` for its button label.

<fwb-tabs-example />
```vue
<template>
  <fwb-tabs v-model="activeTab" class="p-5">
    <fwb-tab name="first" title="First">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="second" title="Second">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="third" title="Third">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')
</script>
```

## Underline

Set `variant="underline"` to render tab buttons with an underline indicator instead of a bordered box.

<fwb-tabs-example-underline />
```vue
<template>
  <fwb-tabs v-model="activeTab" variant="underline" class="p-5">
    <fwb-tab name="first" title="First">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="second" title="Second">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="third" title="Third">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')
</script>
```

## Pills

Set `variant="pills"` to render each tab button as a pill-shaped badge.

<fwb-tabs-example-pills />
```vue
<template>
  <fwb-tabs v-model="activeTab" variant="pills" class="p-5">
    <fwb-tab name="first" title="First">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="second" title="Second">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="third" title="Third">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')
</script>
```

## Directive

Set `directive="show"` to keep all tab content in the DOM and toggle visibility with `v-show`, instead of mounting/unmounting with `v-if` (the default).

<fwb-tabs-example-directive />
```vue
<template>
  <fwb-tabs v-model="activeTab" directive="show" class="p-5">
    <fwb-tab name="first" title="First">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="second" title="Second">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="third" title="Third">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')
</script>
```

## Icons

Add an `#icon` slot to any `FwbTab` to render an icon inside its tab button. Use the `icon-position` prop on `FwbTabs` to control whether icons appear to the left (default) or right of the label. If a tab has an icon but no `title`, the `name` is used as the button's accessible label.

<fwb-tabs-example-icons />
```vue
<template>
  <fwb-tabs v-model="activeTab" class="p-5">
    <fwb-tab name="profile" title="Profile">
      <template #icon>
        <svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      </template>
      Profile content...
    </fwb-tab>
    <fwb-tab name="settings" title="Settings">
      <template #icon>
        <!-- settings SVG -->
      </template>
      Settings content...
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('profile')
</script>
```

## Vertical

Set `:vertical="true"` to stack the tab buttons in a column on the left side. Any `variant` can be combined with `vertical` — for example `variant="pills" :vertical="true"` gives vertical pills.

<fwb-tabs-example-vertical />
```vue
<template>
  <fwb-tabs v-model="activeTab" :vertical="true" class="p-5">
    <fwb-tab name="profile" title="Profile">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="settings" title="Settings">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="contacts" title="Contacts">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="disabled" title="Disabled" disabled>
      Disabled content
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('profile')
</script>
```

## Full Width

Set `:full-width="true"` to make the tab buttons stretch equally across the full width of the container.

<fwb-tabs-example-full-width />
```vue
<template>
  <fwb-tabs v-model="activeTab" :full-width="true" class="p-5">
    <fwb-tab name="profile" title="Profile">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="settings" title="Settings">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="contacts" title="Contacts">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="disabled" title="Disabled" disabled>
      Disabled content
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('profile')
</script>
```

## Custom Classes

Four surfaces are independently stylable via `twMerge` — conflicting utilities always override the defaults:

- `tab-class` — the `<ul>` nav bar
- `item-class` — every tab button (all states, including `hover:` and `focus:` variants)
- `item-active-class` — the active tab button only (merged after `item-class`)
- `class` — the content panel below (via attribute fallthrough)

<fwb-tabs-example-custom-classes />
```vue
<template>
  <fwb-tabs
    v-model="activeTab"
    tab-class="bg-amber-100 dark:bg-green-900 border-b-2 border-amber-400 dark:border-green-700"
    item-class="font-bold text-amber-800 dark:text-green-300 hover:bg-amber-300 hover:text-amber-900 dark:hover:bg-green-800 dark:hover:text-green-100"
    item-active-class="bg-amber-400 dark:bg-green-700 text-amber-900 dark:text-green-100"
    class="bg-amber-50 dark:bg-green-950 p-5 border-amber-400 border-x-2 dark:border-green-700 border-b-2"
  >
    <fwb-tab name="first" title="First">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="second" title="Second">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="third" title="Third">
      Lorem ipsum dolor...
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')
</script>
```

## Tab Interaction

Listen to the `click:tab` event on `FwbTabs` to be notified when a tab button is clicked. The event carries no payload and fires after the active tab has already changed.

<fwb-tabs-example-interaction />
```vue
<template>
  <fwb-tabs @click:tab="handleTabClick" v-model="activeTab" class="p-5">
    <fwb-tab name="first" title="First">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="second" title="Second">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="third" title="Third">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')

const handleTabClick = () => { console.log('Click!') }
</script>
```

## Keyboard Navigation

The tab list follows the [ARIA tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/). Once focus is on a tab button, use the keyboard to navigate:

| Key | Action |
| --- | ------ |
| `ArrowRight` / `ArrowDown` | Move focus to the next tab (wraps around) |
| `ArrowLeft` / `ArrowUp` | Move focus to the previous tab (wraps around) |
| `Home` | Move focus to the first tab |
| `End` | Move focus to the last tab |

Focus and activation move together — focusing a tab also selects it. Disabled tabs are skipped during keyboard navigation.

## Tabs component API

### FwbTabs Props

| Name            | Type                                   | Default     | Description |
| --------------- | -------------------------------------- | ----------- | ----------- |
| directive       | `'if' \| 'show'`                       | `'if'`      | Controls how hidden tab content is rendered: `'if'` unmounts it, `'show'` hides it. |
| fullWidth       | `Boolean`                              | `false`     | Stretches tab buttons to fill the full width of the container. |
| iconPosition    | `'left' \| 'right'`                    | `'left'`    | Position of the icon relative to the label in every tab button. |
| itemActiveClass | `String`                               | `''`        | Extra classes merged onto the active tab button only via `twMerge`. |
| itemClass       | `String`                               | `''`        | Extra classes merged onto every tab button via `twMerge`. |
| modelValue      | `String`                               | `''`        | Name of the currently active tab (use with `v-model`). |
| tabClass        | `String`                               | `''`        | Extra classes merged onto the tab list `<ul>` via `twMerge`. |
| variant         | `'default' \| 'underline' \| 'pills'`  | `'default'` | Visual style of the tab buttons. |
| vertical        | `Boolean`                              | `false`     | Stacks tab buttons in a column on the left side. Compatible with all variants. |

### FwbTabs Events

| Name              | Description |
| ----------------- | ----------- |
| update:modelValue | Emitted with the new tab name when the active tab changes. |
| click:tab         | Emitted when a tab button is clicked (no payload); fires after the active tab has changed. |

### FwbTabs Slots

| Name    | Description |
| ------- | ----------- |
| default | One or more `FwbTab` components. |

### FwbTab Props

| Name     | Type      | Default | Description |
| -------- | --------- | ------- | ----------- |
| disabled | `Boolean` | `false` | Prevents the tab from being selected when clicked. |
| name     | `String`  | —       | **Required.** Unique identifier for this tab. |
| title    | `String`  | `''`    | Label text displayed in the tab button. If omitted and an icon is provided, `name` is used as the accessible label. |

### FwbTab Slots

| Name    | Description |
| ------- | ----------- |
| default | The tab panel content. |
| icon    | Icon rendered inside the tab button. Position is controlled by the parent `FwbTabs` `icon-position` prop. |
