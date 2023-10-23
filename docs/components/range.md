<script setup>
import FwbRangeExample from './range/examples/FwbRangeExample.vue'
import FwbRangeExampleDisabled from './range/examples/FwbRangeExampleDisabled.vue'
import FwbRangeExampleMinMax from './range/examples/FwbRangeExampleMinMax.vue'
import FwbRangeExampleSize from './range/examples/FwbRangeExampleSize.vue'
import FwbRangeExampleSteps from './range/examples/FwbRangeExampleSteps.vue'
</script>

# Vue Toggle Range - Flowbite
#### Get started with the range component to receive a number from the user anywhere from 1 to 100 by sliding form control horizontally based on multiple options

---

:::tip
Original reference: [https://flowbite.com/docs/forms/range/](https://flowbite.com/docs/forms/range/)
:::

## Default

<fwb-range-example />
```vue
<template>
  <fwb-range v-model="value" />
  <pre>Current value: {{ value }}</pre>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRange } from 'flowbite-vue'

const value = ref(10)
</script>
```

## Disabled state

<fwb-range-example-disabled />
```vue
<template>
  <fwb-range v-model="value" disabled label="Disabled range" />
</template>
```

## Min and Max

<fwb-range-example-min-max />
```vue
<template>
  <fwb-range v-model="value" :max="15" :min="5" label="Min-max range" />
</template>
```

## Steps

<fwb-range-example-steps />
```vue
<template>
  <fwb-range v-model="value" :steps="5" label="Steps range" />
</template>
```

## Sizes

<fwb-range-example-size />
```vue
<template>
  <fwb-range v-model="value1" label="Small range" size="sm" />
  <fwb-range v-model="value2" label="Medium range" size="md" />
  <fwb-range v-model="value3" label="Large range" size="lg" />
</template>
```
