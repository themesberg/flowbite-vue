<script setup>
  import FwbToggleExample from './toggle/examples/FwbToggleExample.vue'
  import FwbToggleExampleChecked from './toggle/examples/FwbToggleExampleChecked.vue'
  import FwbToggleExampleColors from './toggle/examples/FwbToggleExampleColors.vue'
  import FwbToggleExampleDisabled from './toggle/examples/FwbToggleExampleDisabled.vue'
  import FwbToggleExampleSize from './toggle/examples/FwbToggleExampleSize.vue'
</script>

# Vue Toggle - Flowbite

#### Use the toggle component to switch between a binary state of true or false using a single click available in multiple sizes, variants, and colors

---

:::tip
Original reference: [https://flowbite.com/docs/forms/toggle/](https://flowbite.com/docs/forms/toggle/)
:::

The toggle component can be used to receive a simple “yes” or “no” type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

## Default toggle

<fwb-toggle-example />
```vue
<template>
  <fwb-toggle v-model="toggle" label="Toggle me" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbToggle } from 'flowbite-vue'

const toggle = ref(false)
</script>
```

## Checked toggle

<fwb-toggle-example-checked />
```vue
<template>
  <fwb-toggle v-model="toggle" label="Toggle me" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbToggle } from 'flowbite-vue'

const toggle = ref(true)
</script>
```

## Disabled toggle

<fwb-toggle-example-disabled />
```vue
<template>
  <fwb-toggle v-model="toggle" disabled label="Can't Toggle me" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbToggle } from 'flowbite'

const toggle = ref(false)
</script>
```

## Colors

<fwb-toggle-example-colors />
```vue
<template>
  <fwb-toggle label="Red" color="red" />
  <fwb-toggle label="Green" color="green" />
  <fwb-toggle label="Purple" color="purple" />
  <fwb-toggle label="Yellow" color="yellow" />
  <fwb-toggle label="Teal" color="teal" />
  <fwb-toggle label="Orange" color="orange" />
</template>
```

## Size

<fwb-toggle-example-size />
```vue
<template>
  <fwb-toggle label="Small" size="sm" />
  <fwb-toggle label="Medium" size="md" />
  <fwb-toggle label="Large" size="lg" />
</template>

<script setup>
import { FwbToggle } from 'flowbite-vue'
</script>
```
