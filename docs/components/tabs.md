<script setup>
import FwbTabsExample from './tabs/examples/FwbTabsExample.vue'
import FwbTabsExampleInteraction from './tabs/examples/FwbTabsExampleInteraction.vue'
import FwbTabsExampleDirective from './tabs/examples/FwbTabsExampleDirective.vue'
import FwbTabsExamplePills from './tabs/examples/FwbTabsExamplePills.vue'
import FwbTabsExampleUnderline from './tabs/examples/FwbTabsExampleUnderline.vue'
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

## Tab Pane Interaction

Listen to the `click:pane` event on `FwbTabs` to intercept tab button clicks before the active tab changes.

<fwb-tabs-example-interaction />
```vue
<template>
  <fwb-tabs @click:pane="handlePaneClick" v-model="activeTab" class="p-5">
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

const handlePaneClick = () => { console.log('Click!') }
</script>
```

## Tabs component API

### FwbTabs Props

| Name       | Type                                    | Default     | Description                                                                               |
| ---------- | --------------------------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| directive  | `'if' \| 'show'`                        | `'if'`      | Controls how hidden tab content is rendered: `'if'` unmounts it, `'show'` hides it.      |
| modelValue | `String`                                | `''`        | Name of the currently active tab (use with `v-model`).                                   |
| variant    | `'default' \| 'underline' \| 'pills'`   | `'default'` | Visual style of the tab buttons.                                                          |

### FwbTabs Events

| Name               | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| update:model-value | Emitted with the new tab name when the active tab changes.           |
| click:pane         | Emitted with the tab name when a tab button is clicked.              |

### FwbTabs Slots

| Name    | Description                          |
| ------- | ------------------------------------ |
| default | One or more `FwbTab` components.     |

### FwbTab Props

| Name     | Type      | Default | Description                                            |
| -------- | --------- | ------- | ------------------------------------------------------ |
| disabled | `Boolean` | `false` | Prevents the tab from being selected when clicked.     |
| name     | `String`  | —       | **Required.** Unique identifier for this tab.          |
| title    | `String`  | `''`    | Label text displayed in the tab button.                |

### FwbTab Slots

| Name    | Description              |
| ------- | ------------------------ |
| default | The tab panel content.   |
