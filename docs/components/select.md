<script setup>
import FwbSelectExample from './select/examples/FwbSelectExample.vue'
import FwbSelectExampleDisabled from './select/examples/FwbSelectExampleDisabled.vue'
import FwbSelectExampleHelper from './select/examples/FwbSelectExampleHelper.vue'
import FwbSelectExampleSize from './select/examples/FwbSelectExampleSize.vue'
import FwbSelectExampleUnderlined from './select/examples/FwbSelectExampleUnderlined.vue'
import FwbSelectExampleValidation from './select/examples/FwbSelectExampleValidation.vue'
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

## Slot - Helper

<fwb-select-example-helper />
```vue
<template>
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Select a country"
  >
    <template #helper>
      We'll never share your details. Read our
      <fwb-a href="#" color="text-blue-600 dark:text-blue-500">
        Privacy Policy
      </fwb-a>.
    </template>
  </fwb-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbA, FwbSelect } from 'flowbite-vue'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
```

## Slot - Validation

- Set validation status via `validationStatus` prop, which accepts `'success'` or `'error'`.
- Add validation message via `validationMessage` slot.

<fwb-select-example-validation />
```vue
<template>
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    validation-status="success"
  />
  <hr class="mt-4 border-0">
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    validation-status="error"
  >
    <template #validationMessage>
      Please select a country
    </template>
  </fwb-select>
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
