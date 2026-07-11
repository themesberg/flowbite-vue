<script setup>
import FwbSelectExample from './select/examples/FwbSelectExample.vue'
import FwbSelectExampleChevron from './select/examples/FwbSelectExampleChevron.vue'
import FwbSelectExampleClearable from './select/examples/FwbSelectExampleClearable.vue'
import FwbSelectExampleDisabled from './select/examples/FwbSelectExampleDisabled.vue'
import FwbSelectExampleHelper from './select/examples/FwbSelectExampleHelper.vue'
import FwbSelectExampleSize from './select/examples/FwbSelectExampleSize.vue'
import FwbSelectExampleStyling from './select/examples/FwbSelectExampleStyling.vue'
import FwbSelectExampleUnderlined from './select/examples/FwbSelectExampleUnderlined.vue'
import FwbSelectExampleValidation from './select/examples/FwbSelectExampleValidation.vue'
</script>

# Select - Flowbite Vue

#### Get started with the select component to allow the user to choose from one or more options from a dropdown list based on multiple styles, sizes, and variants

---

:::tip Select - Flowbite
Original reference: [https://flowbite.com/docs/forms/select/](https://flowbite.com/docs/forms/select/)
:::

The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.

## Default

Use `FwbSelect` with `v-model`, an `options` array of `{ value, name }` objects, and a `label` to render a styled native select input.

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

## Clearable

Use the `clearable` prop to add an empty first option that resets the selection. Without `clearable`, the placeholder option is always disabled and hidden.

<fwb-select-example-clearable />
```vue
<template>
  <fwb-select
    v-model="selected"
    :options="countries"
    clearable
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

## Sizes

Use the `size` prop to control the padding and font size of the select. Available sizes are `sm`, `md` (default), `lg`, and `xl`.

<fwb-select-example-size />
```vue
<template>
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Small"
    size="sm"
  />
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Medium (default)"
    size="md"
  />
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Large"
    size="lg"
  />
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Extra Large"
    size="xl"
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

Set the `disabled` prop to prevent the user from interacting with the select. A custom `placeholder` can be provided to communicate the restriction.

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

Add the `underline` prop to switch to a borderless style with only a bottom border, following the Flowbite underline variant.

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

## Validation

- Set validation status via `validationStatus` prop, which accepts `'success'` or `'error'`.
- Add a validation message via the `validationMessage` slot (rich content) or the `validationMessage` prop (plain string). The slot takes priority when both are given.

<fwb-select-example-validation />
```vue
<template>
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    validation-status="success"
  >
    <template #validationMessage>
      <span class="font-medium">Well done!</span> Your selection looks good.
    </template>
  </fwb-select>
  <hr class="mt-4 border-0">
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    validation-message="Oh, snap! Please select a country."
    validation-status="error"
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

Use the `helper` slot to render supplementary text below the select — such as a privacy notice or contextual hint.

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
  </fwb-select>
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

## Slot - Chevron

Replace the default chevron icon by providing content in the `chevron` slot.

<fwb-select-example-chevron />
```vue
<template>
  <fwb-select
    v-model="selected"
    :options="countries"
    label="Select a country"
  >
    <template #chevron>
      <svg
        aria-hidden="true"
        class="size-4 text-gray-500 dark:text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          d="M12 2a1 1 0 0 1 .707.293l4 4a1 1 0 0 1-1.414 1.414L12 4.414 8.707 7.707a1 1 0 0 1-1.414-1.414l4-4A1 1 0 0 1 12 2Zm-4.707 9.293a1 1 0 0 1 1.414 0L12 14.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
          fill-rule="evenodd"
        />
      </svg>
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

## Styling

Use dedicated props to pass classes to individual elements.

<fwb-select-example-styling />
```vue
<template>
  <fwb-select
    v-model="selected"
    :options="countries"
    class="rounded-none border-2 border-gray-900 dark:border-gray-200"
    label="Select a country"
    label-class="italic text-gray-900 dark:text-gray-200"
    wrapper-class="bg-gray-100 dark:bg-gray-800 p-4"
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

## Select component API

### FwbSelect Props

:::tip Native attribute passthrough
`FwbSelect` sets `inheritAttrs: false` and forwards all extra attributes (e.g. `name`, `form`, `autofocus`) directly to the `<select>` element.
:::

| Name             | Type                           | Default               | Description                                      |
| ---------------- | ------------------------------ | --------------------- | ------------------------------------------------ |
| autocomplete     | `String \| Autocomplete`       | `undefined`           | Sets the `autocomplete` attribute on the select. |
| chevronClass     | `String \| Object`             | `''`                  | Added to the chevron icon container.             |
| class            | `String \| Object`             | `''`                  | Added to the `<select>` element.                 |
| clearable        | `Boolean`                      | `false`               | Shows an empty option that clears the value.     |
| disabled         | `Boolean`                      | `false`               | Disables the select.                             |
| label            | `String`                       | `''`                  | Label text rendered above the select.            |
| labelClass       | `String \| Object`             | `''`                  | Added to the `<label>` element.                  |
| options          | `OptionsType[]`                | `[]`                  | Array of `{ value, name }` option objects.       |
| placeholder      | `String`                       | `'Please select one'` | Placeholder option text.                         |
| required         | `Boolean`                      | `false`               | Sets the `required` attribute.                   |
| size             | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`                | Controls padding and font size.                  |
| underline        | `Boolean`                      | `false`               | Uses the underline style variant.                |
| validationMessage | `String`                      | `undefined`           | Validation feedback text; fallback for the `validationMessage` slot. |
| validationStatus | `'success' \| 'error'`         | `undefined`           | Applies success or error colour styles.          |
| wrapperClass     | `String \| Object`             | `''`                  | Added to the outer root `<div>`.                 |

:::tip Accessibility
`aria-invalid="true"` is set automatically on the native select when `validationStatus="error"`. `aria-describedby` is wired to the IDs of any rendered `validationMessage` (slot or prop) and `helper` slots, and is merged with any `aria-describedby` value you pass as an attribute.
:::

### FwbSelect Slots

| Name              | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| chevron           | Replaces the default chevron icon inside the select.                          |
| helper            | Helper text rendered below the select.                                        |
| validationMessage | Validation feedback rendered below the select (styled by `validationStatus`). Takes priority over the `validationMessage` prop. |
