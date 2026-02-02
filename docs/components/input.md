<script setup>
import FwbInputExample from './input/examples/FwbInputExample.vue'
import FwbInputExampleDisabled from './input/examples/FwbInputExampleDisabled.vue'
import FwbInputExampleHelper from './input/examples/FwbInputExampleHelper.vue'
import FwbInputExamplePrefix from './input/examples/FwbInputExamplePrefix.vue'
import FwbInputExampleRequired from './input/examples/FwbInputExampleRequired.vue'
import FwbInputExampleSize from './input/examples/FwbInputExampleSize.vue'
import FwbInputExampleStyling from './input/examples/FwbInputExampleStyling.vue'
import FwbInputExampleSuffix from './input/examples/FwbInputExampleSuffix.vue'
import FwbInputExampleValidation from './input/examples/FwbInputExampleValidation.vue'
</script>

# Vue Input - Flowbite

#### Get started with a collection of input fields built with Tailwind CSS to start accepting data from the user based on multiple sizes, variants, and input types

---

:::tip
Original reference: [https://flowbite.com/docs/forms/input-field/](https://flowbite.com/docs/forms/input-field/)
:::

The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based on multiple input types, such as text, email, number, password, URL, phone number, and more.

On this page you will find all of the input types based on multiple variants, styles, colors, and sizes built with the utility classes from Tailwind CSS and components from Flowbite.

## Default

<fwb-input-example />
```vue
<template>
  <fwb-input
    v-model="name"
    placeholder="enter your first name"
    label="First name"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'

const name = ref('')
</script>
```

## Size

<fwb-input-example-size />
```vue
<template>
  <fwb-input v-model="name" label="Small" placeholder="enter your name" size="sm" />
  <fwb-input v-model="name" label="Medium" placeholder="enter your name" size="md" />
  <fwb-input v-model="name" label="Large" placeholder="enter your name" size="lg" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'

const name = ref('')
</script>
```

## Disabled

<fwb-input-example-disabled />
```vue
<template>
  <fwb-input
    v-model="name"
    disabled
    label="First name"
    placeholder="enter your first name"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'

const name = ref('')
</script>
```

## Required

<fwb-input-example-required />
```vue
<template>
  <fwb-input
    v-model="name"
    label="First name"
    placeholder="enter your first name"
    required
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'

const name = ref('')
</script>
```

## Slot - Helper

<fwb-input-example-helper />
```vue
<template>
  <fwb-input
    v-model="name"
    label="First name"
    placeholder="enter your first name"
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
import { FwbA, FwbInput } from 'flowbite-vue'

const name = ref('')
</script>
```

## Slot - Prefix

<fwb-input-example-prefix />
```vue
<template>
  <fwb-input v-model="name" label="Search" placeholder="enter your search query">
    <template #prefix>
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </svg>
    </template>
  </fwb-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'

const name = ref('')
</script>
```

## Slot - Suffix
<fwb-input-example-suffix />
```vue
<template>
  <fwb-input
    v-model="query"
    label="Search"
    placeholder="enter your search query"
    size="lg"
  >
    <template #prefix>
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </svg>
    </template>
    <template #suffix>
      <fwb-button>Search</fwb-button>
    </template>
  </fwb-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbButton, FwbInput } from 'flowbite-vue'

const query = ref('')
</script>
```

## Slot - Validation

- Set validation status via `validationStatus` prop, which accepts `'success'` or `'error'`.
- Add validation message via `validationMessage` slot.

<fwb-input-example-validation />
```vue
<template>
  <fwb-input
    v-model="name"
    label="Your name"
    placeholder="Success input"
    required
    validation-status="success"
  >
    <template #validationMessage>
      <span class="font-medium">Well done!</span> Some success message.
    </template>
  </fwb-input>
  <hr class="mt-4 border-0">
  <fwb-input
    v-model="name"
    label="Your name"
    placeholder="Error input"
    required
    validation-status="error"
  >
    <template #validationMessage>
      <span class="font-medium">Oh, snapp!</span> Some error message.
    </template>
  </fwb-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'

const name = ref('')
</script>
```

## Styling Inputs

Use dedicated props to pass classes to individual elements.


<fwb-input-example-styling />
```vue
<template>
  <fwb-input
    v-model="name"
    class="p-2 border border-black rounded-none text-a italic"
    input-class="p-0 text-center text-gray-700 dark:text-gray-200"
    label-class="text-center p-2 m-0 text-gray-900 dark:text-gray-200"
    label="First name"
    placeholder="enter your first name"
    wrapper-class="bg-gray-100 dark:bg-gray-800"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'

const name = ref('')
</script>
```


## Input component API

### FwbInput Props
| Name         | Type                     | Default | Description                                                  |
| ------------ | ------------------------ | ------- | ------------------------------------------------------------ |
| autocomplete | String \| CommonAutoFill | 'off'   | Sets the autocomplete for forms.                             | 
| wrapperClass | String \| Object         | `''`    | Added to main component wrapper                              |
| labelClass   | String \| Object         | `''`    | Added to `<label>` element.                                  |
| class        | String \| Object         | `''`    | Added to wrapper around `<input>` element and prefix/suffix. |
| inputClass   | String \| Object         | `''`    | Added to `<input>` element.                                  |
