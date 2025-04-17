<script setup>
import FwbCheckboxExample from './checkbox/examples/FwbCheckboxExample.vue'
import FwbCheckboxExampleDisabled from './checkbox/examples/FwbCheckboxExampleDisabled.vue'
import FwbCheckboxExampleGroup from './checkbox/examples/FwbCheckboxExampleGroup.vue'
import FwbCheckboxExampleHelper from './checkbox/examples/FwbCheckboxExampleHelper.vue'
import FwbCheckboxExampleLink from './checkbox/examples/FwbCheckboxExampleLink.vue'
</script>

# Vue Checkbox - Flowbite

## Checkbox example

<fwb-checkbox-example />
```vue
<template>
  <fwb-checkbox v-model="check" label="Default checkbox" />
  <fwb-checkbox v-model="checked" label="Checked state" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbCheckbox } from 'flowbite-vue'

const check = ref(false)
const checked = ref(false)
</script>
```

## Disabled state

<fwb-checkbox-example-disabled />
```vue
<template>
  <fwb-checkbox v-model="check" disabled label="Disabled checkbox" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbCheckbox } from 'flowbite-vue'

const check = ref(false)
</script>
```

## Checkbox with link

<fwb-checkbox-example-link />
```vue
<template>
  <fwb-checkbox v-model="check">
    I agree with the
    <fwb-a class="text-blue-600 hover:underline" href="#">
      terms and conditions.
    </fwb-a>
  </fwb-checkbox>
</template>

<script setup>
import { ref } from 'vue'
import { FwbA, FwbCheckbox } from 'flowbite-vue'

const check = ref(false)
</script>
```

## Checkbox with helper text

<fwb-checkbox-example-helper />
```vue
<template>
  <fwb-checkbox v-model="check" label="Free shipping via Flowbite">
    <template #helper>
      For orders shipped from $25 in books or $29 in other categories.
    </template>
  </fwb-checkbox>
</template>

<script setup>
import { ref } from 'vue'
import { FwbCheckbox } from 'flowbite-vue'

const check = ref(false)
</script>
```


## Checkbox group

When using the checkbox with `arrays` or `objects`, the selected values will be stored in the array referenced by v-model

<fwb-checkbox-example-group />

```vue
<template>
  <div class="space-y-2">
    <fwb-checkbox
      v-for="fruit in fruits"
      :key="fruit"
      v-model="selectedFruits"
      :label="fruit"
      :value="fruit"
      name="fruits"
    />
    <p class="mb-4 text-sm text-gray-500">
      Selected fruits: {{ selectedFruits }}
    </p>
    <fwb-checkbox
      v-for="(name, id) in planets"
      :key="id"
      v-model="selectedPlanets"
      :label="name"
      :value="id"
      name="planets"
    />
    <p class="text-sm text-gray-500">
      Selected planets: {{ selectedPlanets }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbCheckbox } from 'flowbite-vue'

const selectedFruits = ref(['Banana', 'Strawberry'])
const fruits = [
  'Apple',
  'Banana',
  'Orange',
  'Strawberry'
  ]

const selectedPlanets = ref(['3'])
const planets = {
  1: 'Mercury',
  2: 'Venus',
  3: 'Earth',
  4: 'Mars',
  5: 'Jupiter',
  6: 'Saturn',
  7: 'Uranus',
  8: 'Neptune',
}
</script>

```

## Checkbox component API

### FwbCheckbox Props
| Name         | Type             | Default | Description                     |
| ------------ | ---------------- | ------- | ------------------------------- |
| wrapperClass | String \| Object | `''`    | Added to main component wrapper |
| labelClass   | String \| Object | `''`    | Added to `<label>` element.     |
| class        | String \| Object | `''`    | Added to `<input>` element.     |
