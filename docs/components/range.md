<script setup>
import DefaultRange from './range/examples/DefaultRange.vue'
import DisabledRange from './range/examples/DisabledRange.vue'
import MinMaxRange from './range/examples/MinMaxRange.vue'
import StepsRange from './range/examples/StepsRange.vue'
import SizeRange from './range/examples/SizeRange.vue'
</script>

# Vue Toggle Range - Flowbite
#### Get started with the range component to receive a number from the user anywhere from 1 to 100 by sliding form control horizontally based on multiple options

---

:::tip
Original reference: [https://flowbite.com/docs/forms/range/](https://flowbite.com/docs/forms/range/)
:::

## Default

```vue
<template>
  <Range v-model="value" />
</template>

<script setup>
import Range from 'flowbite-vue'
import { ref } from 'vue'

const value = ref('10')
</script>

```

<DefaultRange />

## Disabled state

```vue
<template>
  <Range v-model="value" label="Disabled range" :disabled="true" />
</template>
</script>
```

<DisabledRange />

## Min and Max

```vue
<template>
  <Range v-model="value" label="Min-max range" min="0" max="10" />
</template>
```

<MinMaxRange />

## Steps

```vue
<template>
  <Range v-model="value"  label="Steps range" steps="5" />
</template>
```

<StepsRange />

## Sizes

```vue
<template>
  <div>
    <Range v-model="value1" label="Small range" size="sm" />
    <Range v-model="value2" label="Medium range" size="md" />
    <Range v-model="value3" label="Large range" size="lg" />
  </div>
</template>
```

<SizeRange />
