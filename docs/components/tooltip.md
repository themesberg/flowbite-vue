<script setup>
import FwbTooltipExample from './tooltip/examples/FwbTooltipExample.vue'
import FwbTooltipExamplePosition from './tooltip/examples/FwbTooltipExamplePosition.vue'
import FwbTooltipExampleStyle from './tooltip/examples/FwbTooltipExampleStyle.vue'
import FwbTooltipExampleTrigger from './tooltip/examples/FwbTooltipExampleTrigger.vue'
</script>
# Vue Tooltip - Flowbite

## Demo

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

## Tooltip styles

You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `tooltip-light` or `tooltip-dark` attribute.

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

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using placement attribute with `top`, `top-start` , `top-end`, `bottom`, `bottom-start`, `bottom-end`, `right`, `right-start`, `right-end`, `left`, `left-start`, `left-end`, `auto`, `auto-start`,  `auto-end`.
The default value is: `top`

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



## triggerType

You can choose the triggering event by using the `hover` or `click` attributes to choose whether you want to show the tooltip when hovering or clicking on the element. By default this option is set to `click`.

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

<script lang="ts" setup>
import { FwbButton, FwbTooltip } from 'flowbite-vue'
</script>
```
