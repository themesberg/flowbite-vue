<script setup>
import FwbProgressExample from './progress/examples/FwbProgressExample.vue'
import FwbProgressExampleColor from './progress/examples/FwbProgressExampleColor.vue'
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
    <fwb-progress :progress="11" label="Default"  />
    <fwb-progress :progress="22" color="dark" label="Dark"  />
    <fwb-progress :progress="33" color="blue" label="Blue"  />
    <fwb-progress :progress="44" color="red" label="Red"  />
    <fwb-progress :progress="55" color="green" label="Green"  />
    <fwb-progress :progress="66" color="yellow" label="Yellow"  />
    <fwb-progress :progress="77" color="indigo" label="Indigo"  />
    <fwb-progress :progress="88" color="purple" label="Purple"  />
    <fwb-progress :progress="99" color="#3fb984" label="Custom color"  />
  </div>
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## API

### Props
| Name           | Values                                                                                | Default   |
|----------------|---------------------------------------------------------------------------------------|-----------|
| color          | `default`, `dark`, `green`, `red`, `yellow`, `purple`, `blue`, `indigo`, any hex code | `default` |
| label          | `string`                                                                              | `''`      |
| labelPosition  | `inside`, `outside`, `none`                                                           | `none`    |
| labelProgress  | `boolean`                                                                             | `false`   |
| progress       | `number` (0-100)                                                                      | `0`       |
| size           | `sm`, `md`, `lg`, `xl`                                                                | `md`      |
