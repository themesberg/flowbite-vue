<script setup>
import SelectExample from './select/examples/SelectExample.vue';
import DisabledSelect from './select/examples/DisabledSelect.vue';
import SelectSize from './select/examples/SelectSize.vue';
import UnderlinedSelect from './select/examples/UnderlinedSelect.vue';
</script>

# Vue Select Components - Flowbite

#### Get started with the select component to allow the user to choose from one or more options from a dropdown list based on multiple styles, sizes, and variants

---

:::tip
Original reference: [https://flowbite.com/docs/forms/select/](https://flowbite.com/docs/forms/select/)
:::

The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.

## Default
```vue
<script setup>
import { ref } from 'vue'
import { Select } from 'flowbite-vue'

let selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
<template>
    <Select v-model="selected" :options="countries" />
</template>
```

<SelectExample />

## Disabled

```vue
<template>
  <div>
    <Select v-model="selected" :options="countries" placeholder="You can't select" :disabled="true" />
  </div>
</template>
```

<DisabledSelect />

## Underlined

```vue
<template>
  <div>
    <Select v-model="selected" :options="countries" :underline="true" />
  </div>
</template>
```

<UnderlinedSelect />

## Size

```vue
<template>
  <div>
    <Select v-model="selected" :options="countries" :size="lg" />
    <Select v-model="selected" :options="countries" :size="md" />
    <Select v-model="selected" :options="countries" :size="sm" />
  </div>
</template>
```

<SelectSize />