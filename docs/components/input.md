<script setup>
import FwbInputExample from './input/examples/FwbInputExample.vue'
import FwbInputExampleAddon from './input/examples/FwbInputExampleAddon.vue'
import FwbInputExampleDisabled from './input/examples/FwbInputExampleDisabled.vue'
import FwbInputExampleHelper from './input/examples/FwbInputExampleHelper.vue'
import FwbInputExamplePrefix from './input/examples/FwbInputExamplePrefix.vue'
import FwbInputExampleReadonly from './input/examples/FwbInputExampleReadonly.vue'
import FwbInputExampleRequired from './input/examples/FwbInputExampleRequired.vue'
import FwbInputExampleSize from './input/examples/FwbInputExampleSize.vue'
import FwbInputExampleStyling from './input/examples/FwbInputExampleStyling.vue'
import FwbInputExampleSuffix from './input/examples/FwbInputExampleSuffix.vue'
import FwbInputExampleTypes from './input/examples/FwbInputExampleTypes.vue'
import FwbInputExampleValidation from './input/examples/FwbInputExampleValidation.vue'
</script>

# Vue Input Field - Flowbite

#### Get started with a collection of input fields built with Tailwind CSS to start accepting data from the user based on multiple sizes, variants, and input types

---

:::tip Input Field - Flowbite
Original reference: [https://flowbite.com/docs/forms/input-field/](https://flowbite.com/docs/forms/input-field/)
:::

The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based on multiple input types, such as text, email, number, password, URL, phone number, and more.

On this page you will find all of the input types based on multiple variants, styles, colors, and sizes built with the utility classes from Tailwind CSS and components from Flowbite.

## Input

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

## Input sizes

<fwb-input-example-size />
```vue
<template>
<fwb-input
    v-model="name"
    label="Small"
    placeholder="enter your first name"
    size="sm"
  />
  <fwb-input
    v-model="name"
    label="Medium (default)"
    placeholder="enter your first name"
    size="md"
  />
  <fwb-input
    v-model="name"
    label="Large"
    placeholder="enter your first name"
    size="lg"
  />
  <fwb-input
    v-model="name"
    label="Extra Large"
    placeholder="enter your first name"
    size="xl"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'

const name = ref('')
</script>
```

## Input types

Use the `type` prop to set the native HTML input type. All standard input types are supported.

<fwb-input-example-types />
```vue
<template>
  <fwb-input v-model="email" label="Email" placeholder="name@example.com" type="email" />
  <fwb-input v-model="password" label="Password" placeholder="••••••••" type="password" />
  <fwb-input v-model="number" label="Number" placeholder="123" type="number" />
  <fwb-input v-model="phone" label="Phone number" placeholder="+1 (555) 000-0000" type="tel" />
  <fwb-input v-model="url" label="URL" placeholder="https://example.com" type="url" />
  <fwb-input v-model="search" label="Search" placeholder="Search..." type="search" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'

const email = ref('')
const number = ref('')
const password = ref('')
const phone = ref('')
const search = ref('')
const url = ref('')
</script>

```

## Disabled state

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

## Readonly state

The `readonly` attribute passes through to the native input. Combine with `disabled` to prevent all interaction.

<fwb-input-example-readonly />
```vue
<template>
  <fwb-input
    v-model="value"
    label="Readonly input"
    placeholder="This value cannot be changed"
    readonly
  />
  <fwb-input
    v-model="value"
    disabled
    label="Disabled + readonly input"
    placeholder="This value cannot be changed"
    readonly
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'

const value = ref('A pre-filled value')
</script>

```

## Validation

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
      <span class="font-medium">Oh, snap!</span> Some error message.
    </template>
  </fwb-input>
</template>

<script lang="ts" setup>
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

Use the `prefix` slot to place an icon or element on the left side of the input.

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

## Slot - Prefix / Suffix (text)

When the `prefix` or `suffix` slot contains plain text, the component automatically applies addon styling — background, border divider, size-aware padding, and validation/disabled states. Passing an element or component renders the slot content as-is with no extra styling applied.

<fwb-input-example-addon />
```vue
<template>
  <div class="flex gap-2">
    <fwb-input
      v-model="website"
      label="Website URL"
      placeholder="flowbite.com"
      wrapper-class="w-full"
    >
      <template #prefix>
        https://
      </template>
    </fwb-input>
    <fwb-input
      v-model="retentionRate"
      label="Retention Rate"
      type="number"
      input-class="text-right"
      step="0.01"
      wrapper-class="w-full"
    >
      <template #suffix>
        %
      </template>
    </fwb-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'

const retentionRate = ref(98.76)
const website = ref('')
</script>

```

## Styling Inputs

Use dedicated props to pass classes to individual elements.

<fwb-input-example-styling />
```vue
<template>
  <fwb-input
    v-model="name"
    label="First name"
    placeholder="enter your first name"
    wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
    label-class="text-xl font-bold text-amber-900 dark:text-green-200"
    class="bg-amber-100 dark:bg-green-900 border-2 border-amber-500 has-[input:focus]:border-amber-900 dark:border-green-600 dark:has-[input:focus]:border-green-400 has-[input:focus]:ring-amber-300 dark:has-[input:focus]:ring-green-800"
    input-class="text-amber-900 dark:text-green-100 placeholder:text-amber-500 dark:placeholder:text-green-500"
    prefix-class="bg-amber-200 dark:bg-green-800 border-amber-500 dark:border-green-600 text-amber-700 dark:text-green-300"
    suffix-class="bg-amber-200 dark:bg-green-800 border-amber-500 dark:border-green-600 text-amber-700 dark:text-green-300"
  >
    <template #prefix>↣</template>
    <template #suffix>↢</template>
  </fwb-input>
</template>

<script setup>
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'

const name = ref('')
</script>

```

## Input component API

### FwbInput Props

:::tip Native attribute passthrough
`FwbInput` sets `inheritAttrs: false` and forwards all extra attributes (e.g. `placeholder`, `readonly`, `min`, `max`, `pattern`, `step`) directly to the `<input>` element.
:::

| Name             | Type                           | Default     | Description                                                                                     |
| ---------------- | ------------------------------ | ----------- | ----------------------------------------------------------------------------------------------- |
| autocomplete     | `String \| Autocomplete`       | `undefined` | Sets the autocomplete attribute for the input.                                                  |
| class            | `String \| Object`             | `''`        | Added to the wrapper around `<input>`, prefix, and suffix.                                      |
| disabled         | `Boolean`                      | `false`     | Disables the input.                                                                             |
| inputClass       | `String \| Object`             | `''`        | Added to the `<input>` element.                                                                 |
| label            | `String`                       | `''`        | Label text rendered above the input.                                                            |
| labelClass       | `String \| Object`             | `''`        | Added to the `<label>` element.                                                                 |
| prefixClass      | `String \| Object`             | `''`        | Added to the prefix slot container. Overrides addon default colors when used with text content. |
| required         | `Boolean`                      | `false`     | Marks the input as required.                                                                    |
| size             | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`      | Controls input padding and font size.                                                           |
| suffixClass      | `String \| Object`             | `''`        | Added to the suffix slot container. Overrides addon default colors when used with text content. |
| type             | `InputType`                    | `'text'`    | Native HTML input type (e.g. `email`, `password`, `number`).                                    |
| validationStatus | `'success' \| 'error'`         | `undefined` | Applies success or error color scheme.                                                          |
| wrapperClass     | `String \| Object`             | `''`        | Added to the outermost wrapper element.                                                         |

:::tip Accessibility
`aria-invalid="true"` is set automatically on the native input when `validationStatus="error"`. `aria-describedby` is wired to the IDs of any rendered `validationMessage` and `helper` slots, and is merged with any `aria-describedby` value you pass as an attribute.
:::

### FwbInput Slots

| Name              | Description                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| prefix            | Content rendered on the left side of the input (icon, text, or addon span).  |
| suffix            | Content rendered on the right side of the input (button or icon).            |
| helper            | Helper text rendered below the input.                                        |
| validationMessage | Validation feedback rendered below the input (styled by `validationStatus`). |
