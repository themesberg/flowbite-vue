<script setup>
import FwbTooltipExample from './tooltip/examples/FwbTooltipExample.vue'
import FwbTooltipExamplePosition from './tooltip/examples/FwbTooltipExamplePosition.vue'
import FwbTooltipExampleStyle from './tooltip/examples/FwbTooltipExampleStyle.vue'
import FwbTooltipExampleGroup from './tooltip/examples/FwbTooltipExampleGroup.vue'
import FwbTooltipExampleTrigger from './tooltip/examples/FwbTooltipExampleTrigger.vue'
</script>

# Tooltip - Flowbite Vue

#### Use the tooltip component to show additional information when hovering over an element based on Tailwind CSS utility classes

---

:::tip Tooltip - Flowbite
Original reference: [https://flowbite.com/docs/components/tooltips/](https://flowbite.com/docs/components/tooltips/)
:::

The tooltip component can be used to show additional information when hovering over an element, with support for multiple placement positions, light and dark styles, and custom trigger events.

## Default

Use `FwbTooltip` with a `trigger` slot (the element that opens the tooltip) and a `content` slot (the tooltip text). By default the tooltip appears on hover and is positioned above the trigger.

<fwb-tooltip-example />

```vue
<template>
  <fwb-tooltip>
    <template #trigger>
      <fwb-button>
        Default Tooltip
      </fwb-button>
    </template>
    <template #content>
      Tooltip content
    </template>
  </fwb-tooltip>
</template>

<script setup>
import { FwbButton, FwbTooltip } from 'flowbite-vue'
</script>
```

## Styles

Use the `theme` prop to switch between `'dark'` (default) and `'light'` tooltip backgrounds.

<fwb-tooltip-example-style />

```vue
<template>
  <fwb-tooltip theme="light">
    <template #trigger>
      <fwb-button>
        Light Tooltip
      </fwb-button>
    </template>
    <template #content>
      Tooltip content
    </template>
  </fwb-tooltip>
  <fwb-tooltip theme="dark">
    <template #trigger>
      <fwb-button>
        Dark Tooltip
      </fwb-button>
    </template>
    <template #content>
      Tooltip content
    </template>
  </fwb-tooltip>
</template>

<script setup>
import { FwbButton, FwbTooltip } from 'flowbite-vue'
</script>
```

## Placement

Use the `placement` prop to control where the tooltip appears relative to its trigger. Accepted values include `'top'`, `'bottom'`, `'left'`, `'right'`, and their `-start` / `-end` variants, as well as `'auto'`.

<fwb-tooltip-example-position />

```vue
<template>
  <fwb-tooltip placement="top">
    <template #trigger>
      <fwb-button>
        Tooltip top
      </fwb-button>
    </template>
    <template #content>
      Tooltip on top
    </template>
  </fwb-tooltip>
  <fwb-tooltip placement="right">
    <template #trigger>
      <fwb-button>
        Tooltip right
      </fwb-button>
    </template>
    <template #content>
      Tooltip on right
    </template>
  </fwb-tooltip>
  <fwb-tooltip placement="bottom">
    <template #trigger>
      <fwb-button>
        Tooltip bottom
      </fwb-button>
    </template>
    <template #content>
      Tooltip on bottom
    </template>
  </fwb-tooltip>
  <fwb-tooltip placement="left">
    <template #trigger>
      <fwb-button>
        Tooltip left
      </fwb-button>
    </template>
    <template #content>
      Tooltip on left
    </template>
  </fwb-tooltip>
</template>

<script setup>
import { FwbButton, FwbTooltip } from 'flowbite-vue'
</script>
```

## Inside of Button Group

`FwbTooltip` can be nested inside `FwbButtonGroup` — the trigger slot wraps any button in the group.

<fwb-tooltip-example-group />

```vue
<template>
  <fwb-button-group>
    <fwb-button>
      Normal Button
    </fwb-button>
    <fwb-tooltip>
      <template #trigger>
        <fwb-button>
          Button With Tooltip
        </fwb-button>
      </template>
      <template #content>
        Tooltip content
      </template>
    </fwb-tooltip>
  </fwb-button-group>
</template>

<script setup>
import { FwbButton, FwbButtonGroup, FwbTooltip } from 'flowbite-vue'
</script>
```

## Trigger Type

Set `trigger="click"` to open the tooltip on click instead of the default hover behaviour.

<fwb-tooltip-example-trigger />

```vue
<template>
  <fwb-tooltip>
    <template #trigger>
      <fwb-button>
        Tooltip hover
      </fwb-button>
    </template>
    <template #content>
      Tooltip content
    </template>
  </fwb-tooltip>
  <fwb-tooltip trigger="click">
    <template #trigger>
      <fwb-button>
        Tooltip click
      </fwb-button>
    </template>
    <template #content>
      Tooltip content
    </template>
  </fwb-tooltip>
</template>

<script setup>
import { FwbButton, FwbTooltip } from 'flowbite-vue'
</script>
```

## Tooltip component API

### FwbTooltip Props

| Name      | Type                                                                                                                                                                        | Default  | Description                                                                  |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------- |
| placement | `'auto' \| 'auto-start' \| 'auto-end' \| 'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'right' \| 'right-start' \| 'right-end' \| 'left' \| 'left-start' \| 'left-end'` | `'top'` | Where the tooltip appears relative to its trigger element. |
| theme     | `'dark' \| 'light'`                                                                                                                                                         | `'dark'` | Visual style of the tooltip bubble.                                          |
| trigger   | `'hover' \| 'click'`                                                                                                                                                        | `'hover'` | Event that opens the tooltip.                                                |

### FwbTooltip Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| trigger | The element that opens and anchors the tooltip.  |
| content | The text or markup shown inside the tooltip.     |
