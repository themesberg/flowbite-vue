<script setup>
import InputExample from './input/examples/InputExample.vue';
import InputSizeExample from './input/examples/InputSizeExample.vue';
import InputDisabledExample from './input/examples/InputDisabledExample.vue';
import InputHelperExample from './input/examples/InputHelperExample.vue';
import InputPrefixExample from './input/examples/InputPrefixExample.vue';
import InputSuffixExample from './input/examples/InputSuffixExample.vue'
import InputRequiredExample from './input/examples/InputRequiredExample.vue'
import InputValidationExample from './input/examples/InputValidationExample.vue'
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
```vue
<script setup>
import { FwbInput } from 'flowbite-vue'
import { ref } from 'vue'

const name = ref('')
</script>
<template>
    <fwb-input v-model="name" placeholder="enter your first name" label="First name" />
</template>
```

<InputExample />

## Size
```vue
<script setup>
import { FwbInput } from 'flowbite-vue'
</script>
<template>
    <fwb-input size="sm" placeholder="enter your first name" label="Small" />
    <fwb-input size="md" placeholder="enter your last name" label="Medium" />
    <fwb-input size="lg" placeholder="enter your second name" label="Large" />
</template>
```

<InputSizeExample />

## Disabled
```vue
<script setup>
import { FwbInput } from 'flowbite-vue'
</script>
<template>
  <fwb-input :disabled="true" placeholder="enter your first name" label="First name" />
</template>
```

## Required

```vue
<script setup>
import { FwbInput } from 'flowbite-vue'
</script>
<template>
  <fwb-input required placeholder="enter your first name" label="First name" />
</template>
```

<InputRequiredExample />

## Slot - Helper
```vue
<script setup>
import { FwbInput } from 'flowbite-vue'
</script>
<template>
  <fwb-input placeholder="enter your first name" label="First name">
    <template #helper>
      We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.
    </template>
  </fwb-input>
</template>
```

<InputHelperExample />

## Slot - Prefix
```vue
<script setup>
import { FwbInput } from 'flowbite-vue'
</script>
<template>
  <fwb-input placeholder="enter your first name" label="First name">
    <template #prefix>
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </template>
  </fwb-input>
</template>
```

<InputPrefixExample />

## Slot - Suffix
```vue
<script setup>
import { FwbInput, FwbButton } from 'flowbite-vue'
</script>
<template>
  <fwb-input size="lg" placeholder="enter your search query" label="Search">
    <template #prefix>
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </template>
    <template #suffix>
      <fwb-button>Search</fwb-button>
    </template>
  </fwb-input>
</template>
```

<InputSuffixExample />

## Slot - Validation

- Set validation status via `validationStatus` props, which accepts `'success'` or `'error'`.
- Add validation message via `validationMessage` slot.

```vue
<script setup>
import { FwbInput } from 'flowbite-vue'
</script>
<template>
  <fwb-input v-model='email' required placeholder="enter your email address" label="Email" validation-status='success' />
  <fwb-input v-model='email' required placeholder="enter your email address" label="Email" validation-status='error'>
    <template #validationMessage>
      Please enter a valid email address
    </template>
  </fwb-input>
</template>
```

<InputValidationExample />
