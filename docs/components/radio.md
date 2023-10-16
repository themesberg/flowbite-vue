<script setup>
import FwbRadioExample from './radio/examples/FwbRadioExample.vue'
import FwbRadioExampleBordered from './radio/examples/FwbRadioExampleBordered.vue'
import FwbRadioExampleDisabled from './radio/examples/FwbRadioExampleDisabled.vue'
import FwbRadioExampleInline from './radio/examples/FwbRadioExampleInline.vue'
import FwbRadioExampleLink from './radio/examples/FwbRadioExampleLink.vue'
import FwbRadioExampleList from './radio/examples/FwbRadioExampleList.vue'
import FwbRadioExampleListHorizontal from './radio/examples/FwbRadioExampleListHorizontal.vue'
</script>

# Vue Toggle Radio - Flowbite

#### Get started with the radio component to let the user choose a single option from multiple options in the form of a circle based on multiple styles and colors

---

:::tip
Original reference: [https://flowbite.com/docs/forms/range/](https://flowbite.com/docs/forms/radio/)
:::

## Radio examples

<fwb-radio-example />
```vue
<template>
  <fwb-radio v-model="picked" name="radio" label="Radio 1" value="one" />
  <fwb-radio v-model="picked" name="radio" label="Radio 2" value="two" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio } from 'flowbite-vue'

const picked = ref()
</script>
```

## Disabled Radio

<fwb-radio-example-disabled />
```vue
<template>
  <fwb-radio
    v-model="picked"
    disabled
    label="Disabled radio"
    name="radio-disabled"
    value="one"
  />
  <fwb-radio
    v-model="picked"
    disabled
    label="Disabled checked"
    name="radio-disabled"
    value="two"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio } from 'flowbite-vue'

const picked = ref('two')
</script>
```

## Radio list group

<fwb-radio-example-list />
```vue
<template>
  <fwb-p class="mb-2">
    Technology {{ picked }}
  </fwb-p>

  <fwb-list-group>
    <fwb-list-group-item>
      <fwb-radio
        v-model="picked"
        label="Svelte"
        name="list-radio"
        value="Svelte"
      />
    </fwb-list-group-item>
    <fwb-list-group-item>
      <fwb-radio
        v-model="picked"
        label="Vue JS"
        name="list-radio"
        value="Vue JS"
      />
    </fwb-list-group-item>
    <fwb-list-group-item>
      <fwb-radio
        v-model="picked"
        label="React"
        name="list-radio"
        value="React"
      />
    </fwb-list-group-item>
    <fwb-list-group-item>
      <fwb-radio
        v-model="picked"
        label="Angular"
        name="list-radio"
        value="Angular"
      />
    </fwb-list-group-item>
  </fwb-list-group>
</template>

<script setup>
import { ref } from 'vue'
import { FwbListGroup, FwbListGroupItem, FwbP, FwbRadio } from 'flowbite-vue'

const picked = ref('Vue JS')
</script>
```

## Horizontal list group

<fwb-radio-example-list-horizontal />
```vue
<template>
  <fwb-p class="mb-2">
    Technology {{ picked }}
  </fwb-p>
  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
      <fwb-radio
        v-model="picked"
        label="Svelte"
        name="radio-horizontal"
        value="Svelte"
      />
    </li>
    <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
      <fwb-radio
        v-model="picked"
        label="Vue JS"
        name="radio-horizontal"
        value="Vue JS"
      />
    </li>
    <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
      <fwb-radio
        v-model="picked"
        label="React"
        name="radio-horizontal"
        value="React"
      />
    </li>
    <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
      <fwb-radio
        v-model="picked"
        label="Angular"
        name="radio-horizontal"
        value="Angular"
      />
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import { FwbP, FwbRadio } from 'flowbite-vue'

const picked = ref('svelte')
</script>
```

## Inline Radio

<fwb-radio-example-inline />
```vue
<template>
  <div class="flex w-96">
    <fwb-radio v-model="picked" label="Inline 1" value="first" />
    <fwb-radio v-model="picked" label="Inline 2" value="second" />
    <fwb-radio v-model="picked" label="Inline 3" value="third" />
    <fwb-radio v-model="picked" label="Inline 4" value="fourth" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio } from 'flowbite-vue'

const picked = ref('first')
</script>
```

## Radio with a link

<fwb-radio-example-link />
```vue
<template>
  <fwb-radio v-model="picked" name="with-link" value="first">
    I agree with the
    <fwb-a class="ml-1" href="#">
      terms and conditions
    </fwb-a>.
  </fwb-radio>
</template>

<script setup>
import { ref } from 'vue'
import { FwbA, FwbRadio } from 'flowbite-vue'

const picked = ref()
</script>
```

## Bordered Radio

<fwb-radio-example-bordered />
```vue
<template>
  <div class="grid grid-cols-2 gap-6">
    <div class="flex items-center p-2 border border-gray-200 rounded dark:border-gray-700">
      <fwb-radio v-model="picked" label="Radio 1" name="radio-bordered" value="one" />
    </div>
    <div class="flex items-center p-2 border border-gray-200 rounded dark:border-gray-700">
      <fwb-radio v-model="picked" label="Radio 2" name="radio-bordered" value="two" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio } from 'flowbite-vue'

const picked = ref('one')
</script>
```
