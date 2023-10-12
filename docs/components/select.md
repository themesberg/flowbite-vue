<script setup>
import SelectExample from './select/examples/SelectExample.vue';
import DisabledSelect from './select/examples/DisabledSelect.vue';
import SelectSize from './select/examples/SelectSize.vue';
import UnderlinedSelect from './select/examples/UnderlinedSelect.vue';
</script>

# Vue Select - Flowbite

#### Get started with the select component to allow the user to choose from one or more options from a dropdown list based on multiple styles, sizes, and variants

---

:::tip
Original reference: [https://flowbite.com/docs/forms/select/](https://flowbite.com/docs/forms/select/)
:::

The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.

## Default
```vue
<template>
  <div>
    <fwb-select
        v-model="selected"
        :options="countries"
        label="Select a country"
    />
  </div>
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

<SelectExample />

## Disabled

```vue
<template>
  <div>
    <fwb-select
        v-model="selected"
        :options="countries"
        placeholder="You can't select"
        label="Select a country"
        :disabled="true"
    />
  </div>
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

<DisabledSelect />

## Underlined

```vue
<template>
  <div>
    <fwb-select
        v-model="selected"
        :options="countries"
        label="Select a country"
        :underline="true"
    />
  </div>
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

<UnderlinedSelect />

## Size

```vue
<template>
  <div class="flex flex-col gap-2">
    <fwb-select
        v-model="selected"
        :options="countries"
        label="Select a country"
        size="lg"
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
        size="sm"
    />
  </div>
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

<SelectSize />
