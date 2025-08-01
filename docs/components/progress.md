<script setup>
import FwbProgressExample from './progress/examples/FwbProgressExample.vue'
import FwbProgressExampleColor from './progress/examples/FwbProgressExampleColor.vue'
import FwbProgressExampleCustom from './progress/examples/FwbProgressExampleCustom.vue'
import FwbProgressExampleLabelInside from './progress/examples/FwbProgressExampleLabelInside.vue'
import FwbProgressExampleLabelOutside from './progress/examples/FwbProgressExampleLabelOutside.vue'
import FwbProgressExampleSize from './progress/examples/FwbProgressExampleSize.vue'


</script>
# Vue Progress Bar - Flowbite

## Default

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
You can also use different sizes by using various sizing.

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

## With label inside
Here is an example of using a progress bar with the label inside the bar.

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

## With label outside
And this is an example of using a progress bar outside the bar.

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
You can also apply color.

<fwb-progress-example-color />
```vue
<template>
  <div class="grid gap-2">
    <fwb-progress :progress="12.5" label="Default"  />
    <fwb-progress :progress="25" color="dark" label="Dark"  />
    <fwb-progress :progress="37.5" color="blue" label="Blue"  />
    <fwb-progress :progress="50" color="red" label="Red"  />
    <fwb-progress :progress="62.5" color="green" label="Green"  />
    <fwb-progress :progress="75" color="yellow" label="Yellow"  />
    <fwb-progress :progress="87.5" color="indigo" label="Indigo"  />
    <fwb-progress :progress="100" color="purple" label="Purple"  />
  </div>
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## Custom
You can fully customize the appearance of the progress bar using TailwindCSS utility classes via the following props:

| Prop                  | Description                                                      |
|-----------------------|------------------------------------------------------------------|
| `inner-classes`       | Custom classes for the inner progress bar                        |
| `outer-classes`       | Custom classes for the outer progress bar container              |
| `outside-label-classes` | Custom classes for the label outside the progress bar        |

These props allow you to override or extend the default styling for each part of the component, enabling advanced use cases such as gradients, custom colors, rounded corners, and more.

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
