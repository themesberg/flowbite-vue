<script setup>
import FwbProgressExample from './progress/examples/FwbProgressExample.vue'
import FwbProgressExampleColor from './progress/examples/FwbProgressExampleColor.vue'
import FwbProgressExampleCustom from './progress/examples/FwbProgressExampleCustom.vue'
import FwbProgressExampleLabelInside from './progress/examples/FwbProgressExampleLabelInside.vue'
import FwbProgressExampleLabelOutside from './progress/examples/FwbProgressExampleLabelOutside.vue'
import FwbProgressExampleSize from './progress/examples/FwbProgressExampleSize.vue'
</script>

# Progress Bar - Flowbite Vue

#### Use the progress bar component to show the completion status of a task or process based on Tailwind CSS utility classes

---

:::tip Progress Bar - Flowbite
Original reference: [https://flowbite.com/docs/components/progress/](https://flowbite.com/docs/components/progress/)
:::

The progress bar component can be used to show the completion percentage of a task or process, with support for custom colors, sizes, and both inside and outside label variants styled with Tailwind CSS utility classes.

## Default Progress Bar

Use `FwbProgress` with the `progress` prop (0–100) to render a basic horizontal progress bar.

<fwb-progress-example />

```vue
<template>
  <fwb-progress :progress="45" />
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## Sizes

Use the `size` prop to control the height of the progress bar track. Available sizes are `sm`, `md` (default), `lg`, and `xl`. Combine with `label` to show a description above the bar.

<fwb-progress-example-size />

```vue
<template>
  <div class="grid gap-2">
    <fwb-progress :progress="25" size="sm" label="Small" />
    <fwb-progress :progress="50" size="md" label="Medium" />
    <fwb-progress :progress="75" size="lg" label="Large" />
    <fwb-progress :progress="100" size="xl" label="Extra Large" />
  </div>
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## Label Inside

Set `label-position="inside"` and `label-progress` to render the percentage value inside the progress bar. Use `size="lg"` or larger to ensure there is enough space for the label.

<fwb-progress-example-label-inside />

```vue
<template>
  <fwb-progress
    :progress="50"
    label-position="inside"
    label-progress
    size="lg"
  />
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## Label Outside

Set `label-position="outside"` and `label-progress` to render the percentage value to the right of the label text above the bar. Use `label` to set the descriptive text on the left.

<fwb-progress-example-label-outside />

```vue
<template>
  <fwb-progress
    :progress="42"
    label-position="outside"
    label-progress
    label="Flowbite Vue 3"
  />
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## Colors

Use the `color` prop to change the fill color of the progress bar. Available values are `default`, `dark`, `blue`, `red`, `green`, `yellow`, `indigo`, and `purple`.

<fwb-progress-example-color />

```vue
<template>
  <div class="grid gap-2">
    <fwb-progress :progress="12.5" label="Default" />
    <fwb-progress :progress="25" color="dark" label="Dark" />
    <fwb-progress :progress="37.5" color="blue" label="Blue" />
    <fwb-progress :progress="50" color="red" label="Red" />
    <fwb-progress :progress="62.5" color="green" label="Green" />
    <fwb-progress :progress="75" color="yellow" label="Yellow" />
    <fwb-progress :progress="87.5" color="indigo" label="Indigo" />
    <fwb-progress :progress="100" color="purple" label="Purple" />
  </div>
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## Custom Styling

Use `inner-classes`, `outer-classes`, and `outside-label-classes` to override any part of the progress bar's default styling with your own Tailwind utilities.

<fwb-progress-example-custom />

```vue
<template>
  <fwb-progress
    :progress="50"
    :inner-classes="'rounded-xs bg-teal-900 dark:bg-teal-200'"
    :outer-classes="'bg-teal-200 dark:bg-teal-900'"
    :outside-label-classes="'italic text-sky-800 dark:text-sky-200'"
    label="Custom"
  />
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## Progress Bar component API

### FwbProgress Props

| Name               | Type                                                              | Default     | Description                                                                         |
| ------------------ | ----------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------- |
| color              | `'default' \| 'dark' \| 'blue' \| 'red' \| 'green' \| 'yellow' \| 'indigo' \| 'purple'` | `'default'` | Fill color of the inner progress bar.     |
| innerClasses       | `String \| Object`                                                | `''`        | Overrides or extends classes on the inner progress bar element.                     |
| label              | `String`                                                          | `''`        | Descriptive text rendered above the bar on the left side.                           |
| labelPosition      | `'none' \| 'inside' \| 'outside'`                                | `'none'`    | Controls where the percentage value is rendered relative to the bar.                |
| labelProgress      | `Boolean`                                                         | `false`     | When `true`, renders the `progress` percentage next to or inside the bar.           |
| outerClasses       | `String \| Object`                                                | `''`        | Overrides or extends classes on the outer progress track element.                   |
| outsideLabelClasses | `String \| Object`                                               | `''`        | Overrides or extends classes on the label/percentage text rendered outside the bar. |
| progress           | `Number`                                                          | `0`         | The current completion value (0–100).                                               |
| size               | `'sm' \| 'md' \| 'lg' \| 'xl'`                                   | `'md'`      | Controls the height of the progress bar track.                                      |
