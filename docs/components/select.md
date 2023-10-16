<script setup>
import FwbSelectExample from './select/examples/FwbSelectExample.vue'
import FwbSelectExampleDisabled from './select/examples/FwbSelectExampleDisabled.vue'
import FwbSelectExampleSize from './select/examples/FwbSelectExampleSize.vue'
import FwbSelectExampleUnderlined from './select/examples/FwbSelectExampleUnderlined.vue'
</script>

# Vue Select - Flowbite

#### Get started with the select component to allow the user to choose from one or more options from a dropdown list based on multiple styles, sizes, and variants

---

:::tip
Original reference: [https://flowbite.com/docs/forms/select/](https://flowbite.com/docs/forms/select/)
:::

The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.

## Default

<fwb-select-example />
```vue
<template>
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Select a country"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbSelect } from 'flowbite-vue'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
```

## Disabled

<fwb-select-example-disabled />
```vue
<template>
  <fwb-select
    v-model="selected"
    :options="countries"
    disabled
    label="Select a country"
    placeholder="You can't select"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbSelect } from 'flowbite-vue'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
```

## Underlined

<fwb-select-example-underlined />
```vue
<template>
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    underline
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbSelect } from 'flowbite-vue'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
```

## Size

<fwb-select-example-size />
```vue
<template>
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    size="sm"
  />
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    size="md"
  />
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    size="lg"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbSelect } from 'flowbite-vue'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
```
