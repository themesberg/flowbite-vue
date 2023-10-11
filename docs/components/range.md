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
  <div class="vp-raw">
    <fwb-range v-model="value" />
  </div>
</template>

<script setup>
  import { FwbRange } from 'flowbite-vue'
  import { ref } from 'vue'

  const value = ref('10')
</script>
```

<DefaultRange />

## Disabled state

```vue
<template>
  <div>
    <fwb-range
        v-model="value"
        label="Disabled range"
        :disabled="true"
    />
  </div>
</template>

<script setup>
  import { FwbRange } from 'flowbite-vue'
  import { ref } from 'vue'

  const value = ref('10')
</script>
```

<DisabledRange />

## Min and Max

```vue
<template>
  <div>
    <fwb-range
        v-model="value"
        label="Min-max range"
        min="0"
        max="10"
    />
  </div>
</template>

<script setup>
  import { FwbRange } from 'flowbite-vue'
  import { ref } from 'vue'

  const value = ref('10')
</script>
```

<MinMaxRange />

## Steps

```vue
<template>
  <div>
    <fwb-range
        v-model="value"
        label="Steps range"
        steps="5"
    />
  </div>
</template>

<script setup>
  import { FwbRange } from 'flowbite-vue'
  import { ref } from 'vue'

  const value = ref('10')
</script>
```

<StepsRange />

## Sizes

```vue
<template>
  <div class="flex flex-col gap-3">
    <fwb-range
        v-model="value"
        label="Small range"
        size="sm"
    />
    <fwb-range
        v-model="value"
        label="Medium range"
        size="md"
    />
    <fwb-range
        v-model="value"
        label="Large range"
        size="lg"
    />
    <div class="mt-2">
      Value: {{ value }}
    </div>
  </div>
</template>

<script setup>
  import { FwbRange } from 'flowbite-vue'
  import { ref } from 'vue'

  const value = ref('10')
</script>
```

<SizeRange />
