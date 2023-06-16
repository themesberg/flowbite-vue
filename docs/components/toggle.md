<script setup>
  import DefaultToggle from './toggle/examples/DefaultToggle.vue'
  import CheckedToggle from './toggle/examples/CheckedToggle.vue'
  import DisabledToggle from './toggle/examples/DisabledToggle.vue'
  import ColorsToggle from './toggle/examples/ColorsToggle.vue'
  import SizeToggle from './toggle/examples/SizeToggle.vue'
</script>

# Vue Toggle Component - Flowbite

#### Use the toggle component to switch between a binary state of true or false using a single click available in multiple sizes, variants, and colors

---

:::tip
Original reference: [https://flowbite.com/docs/forms/toggle/](https://flowbite.com/docs/forms/toggle/)
:::

The toggle component can be used to receive a simple “yes” or “no” type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

## Default toggle
```vue
<script setup>
import { Toggle } from 'flowbite-vue'
import { ref } from 'vue'

const toggle = ref(false)
</script>
<template>
  <Toggle v-model="toggle" label="Toggle me" />
</template>
```

<DefaultToggle />

## Checked toggle
```vue
<script setup>
import { Toggle } from 'flowbite-vue'
import { ref } from 'vue'

const toggle = ref(true)
</script>
<template>
  <Toggle v-model="toggle" label="Toggle me" />
</template>
```

<CheckedToggle />

## Disabled toggle
```vue
<script setup>
import { Toggle } from 'flowbite-vue'
import { ref } from 'vue'

const toggle = ref(false)
</script>
<template>
  <Toggle v-model="toggle" label="Toggle me" :disabled="true" />
</template>
```

<DisabledToggle />

## Colors
```vue
<template>
  <div>
    <Toggle label="Red" color="red" />
    <Toggle label="Green" color="green" />
    <Toggle label="Purple" color="purple" />
    <Toggle label="Yellow" color="yellow" />
    <Toggle label="Teal" color="teal" />
    <Toggle label="Orange" color="orange" />
  </div>
</template>
```

<ColorsToggle />

## Size
```vue
<template>
  <Toggle label="Samll" size="sm" />
  <Toggle label="Medium" size="md" />
  <Toggle label="Large" size="lg" />
</template>
```

<SizeToggle />
