<script setup>
import InputExample from './input/examples/InputExample.vue';
import InputSizeExample from './input/examples/InputSizeExample.vue';
import InputDisabledExample from './input/examples/InputDisabledExample.vue';
import InputHelperExample from './input/examples/InputHelperExample.vue';
import InputPrefixExample from './input/examples/InputPrefixExample.vue';
import InputSuffixExample from './input/examples/InputSuffixExample.vue'
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
import { Input } from 'flowbite-vue'
import { ref } from 'vue'

const name = ref('')
</script>
<template>
    <Input v-modal="name" placeholder="enter your first name" label="First name" />
</template>
```

<InputExample />

## Size
```vue
<script setup>
import { Input } from 'flowbite-vue'
</script>
<template>
    <Input size="sm" placeholder="enter your first name" label="Small" />
    <Input size="md" placeholder="enter your last name" label="Medium" />
    <Input size="lg" placeholder="enter your second name" label="Large" />
</template>
```

<InputSizeExample />

## Disabled
```vue
<script setup>
import { Input } from 'flowbite-vue'
</script>
<template>
  <Input :disabled="true" placeholder="enter your first name" label="First name" />
</template>
```

<InputDisabledExample />

## Slot - Helper
```vue
<script setup>
import { Input } from 'flowbite-vue'
</script>
<template>
  <Input placeholder="enter your first name" label="First name">
    <template #helper>
      We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.
    </template>
  </Input>
</template>
```

<InputHelperExample />

## Slot - Prefix
```vue
<script setup>
import { Input } from 'flowbite-vue'
</script>
<template>
  <Input placeholder="enter your first name" label="First name">
    <template #prefix>
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </template>
  </Input>
</template>
```

<InputPrefixExample />

## Slot - Suffix
```vue
<script setup>
import { Input, Button } from 'flowbite-vue'
</script>
<template>
  <Input size="lg" placeholder="enter your search query" label="Search">
    <template #prefix>
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </template>
    <template #suffix>
      <Button>Search</Button>
    </template>
  </Input>
</template>
```

<InputSuffixExample />

