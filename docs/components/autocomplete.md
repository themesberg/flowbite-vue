<script setup>
import FwbAutocompleteExample from './autocomplete/examples/FwbAutocompleteExample.vue'
import FwbAutocompleteExampleSize from './autocomplete/examples/FwbAutocompleteExampleSize.vue'
import FwbAutocompleteExampleDisabled from './autocomplete/examples/FwbAutocompleteExampleDisabled.vue'
import FwbAutocompleteExampleValidation from './autocomplete/examples/FwbAutocompleteExampleValidation.vue'
import FwbAutocompleteExampleHelper from './autocomplete/examples/FwbAutocompleteExampleHelper.vue'
import FwbAutocompleteExampleSuffix from './autocomplete/examples/FwbAutocompleteExampleSuffix.vue'
import FwbAutocompleteExampleCustom from './autocomplete/examples/FwbAutocompleteExampleCustom.vue'
import FwbAutocompleteExampleRemote from './autocomplete/examples/FwbAutocompleteExampleRemote.vue'
import FwbAutocompleteExampleCustomInput from './autocomplete/examples/FwbAutocompleteExampleCustomInput.vue'
import FwbAutocompleteExampleStyling from './autocomplete/examples/FwbAutocompleteExampleStyling.vue'
</script>

# Autocomplete - Flowbite Vue

#### Get started with the autocomplete component to allow users to search and select from a list of options with real-time filtering and keyboard navigation

---

The autocomplete component supports real-time filtering, keyboard navigation, remote data loading, and custom option rendering. Built with Tailwind CSS utility classes and fully compatible with dark mode.

## Default

Use `v-model` to bind the selected value, `options` to provide the list, `display` to control what text is shown, and `search-fields` to define which fields to filter against.

<fwb-autocomplete-example />

```vue
<template>
  <fwb-autocomplete
    v-model="selectedCountry"
    :options="countries"
    :search-fields="['name']"
    display="name"
    label="Select a country"
    placeholder="Search countries..."
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbAutocomplete } from 'flowbite-vue'

const selectedCountry = ref(null)
const countries = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'France', code: 'FR' },
  { id: 4, name: 'Germany', code: 'DE' },
  { id: 5, name: 'United Kingdom', code: 'UK' },
]
</script>

```

## Sizes

Use the `size` prop to control the input padding and font size. Accepts `'sm'`, `'md'` (default), `'lg'`, and `'xl'`.

<fwb-autocomplete-example-size />

```vue
<template>
  <fwb-autocomplete
    v-model="selected1"
    :options="countries"
    :search-fields="['name']"
    display="name"
    label="Small"
    size="sm"
    placeholder="Small autocomplete..."
  />
  <fwb-autocomplete
    v-model="selected2"
    :options="countries"
    :search-fields="['name']"
    display="name"
    label="Medium (default)"
    size="md"
    placeholder="Medium autocomplete..."
  />
  <fwb-autocomplete
    v-model="selected3"
    :options="countries"
    :search-fields="['name']"
    display="name"
    label="Large"
    size="lg"
    placeholder="Large autocomplete..."
  />
  <fwb-autocomplete
    v-model="selected4"
    :options="countries"
    :search-fields="['name']"
    display="name"
    label="Extra Large"
    size="xl"
    placeholder="Extra Large autocomplete..."
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbAutocomplete } from 'flowbite-vue'

const selected1 = ref(null)
const selected2 = ref(null)
const selected3 = ref(null)
const selected4 = ref(null)

const countries = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'France', code: 'FR' },
]
</script>

```

## Disabled

Add the `disabled` prop to prevent user interaction and visually indicate the field is unavailable.

<fwb-autocomplete-example-disabled />

```vue
<template>
  <fwb-autocomplete
    v-model="selected"
    :options="countries"
    :search-fields="['name']"
    display="name"
    disabled
    label="Select a country"
    placeholder="Search disabled..."
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbAutocomplete } from 'flowbite-vue'

const selected = ref(null)
const countries = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'France', code: 'FR' },
]
</script>

```

## Validation

Set `validationStatus` to `'success'` or `'error'` to apply the corresponding colour scheme. Use the `validationMessage` slot (rich content) or the `validationMessage` prop (plain string) to render feedback text below the input. The slot takes priority when both are given.

<fwb-autocomplete-example-validation />

```vue
<template>
  <fwb-autocomplete
    v-model="selected1"
    :options="countries"
    :search-fields="['name']"
    display="name"
    label="Select a country"
    validation-status="success"
  >
    <template #validationMessage>
      <span class="font-medium">Well done!</span> Your selection looks good.
    </template>
  </fwb-autocomplete>
  <hr class="mt-4 border-0">
  <fwb-autocomplete
    v-model="selected2"
    :options="countries"
    :search-fields="['name']"
    display="name"
    label="Select a country"
    validation-message="Oh, snap! Please select a country."
    validation-status="error"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbAutocomplete } from 'flowbite-vue'

const selected1 = ref(null)
const selected2 = ref(null)
const countries = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'France', code: 'FR' },
]
</script>

```

## Slot - Helper

Use the `helper` slot to render supplemental text below the input, such as a hint or privacy note.

<fwb-autocomplete-example-helper />

```vue
<template>
  <fwb-autocomplete
    v-model="selected"
    :options="countries"
    :search-fields="['name']"
    display="name"
    label="Select a country"
    placeholder="Search countries..."
  >
    <template #helper>
      We'll never share your selection. Read our
      <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
        Privacy Policy
      </a>.
    </template>
  </fwb-autocomplete>
</template>

<script setup>
import { ref } from 'vue'
import { FwbAutocomplete } from 'flowbite-vue'

const selected = ref(null)
const countries = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'France', code: 'FR' },
]
</script>

```

## Slot - Suffix

Replace the default search/clear/loading icons by providing content in the `suffix` slot.

<fwb-autocomplete-example-suffix />

```vue
<template>
  <fwb-autocomplete
    v-model="selected"
    :options="countries"
    :search-fields="['name']"
    display="name"
    label="Select a country"
    placeholder="Search countries..."
  >
    <template #suffix>
      <svg
        aria-hidden="true"
        class="size-5 opacity-40"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </template>
  </fwb-autocomplete>
</template>

<script setup>
import { ref } from 'vue'
import { FwbAutocomplete } from 'flowbite-vue'

const selected = ref(null)
const countries = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'France', code: 'FR' },
]
</script>

```

## Slot - Option

Customise how each dropdown option is rendered using the `option` slot.

<fwb-autocomplete-example-custom />

```vue
<template>
  <fwb-autocomplete
    v-model="selectedUser"
    :options="users"
    :search-fields="['name', 'email']"
    display="name"
    label="Select user"
    placeholder="Search users..."
  >
    <template #option="{ option }">
      <div class="flex items-center">
        <img
          :src="option.avatar"
          :alt="option.name"
          class="w-8 h-8 rounded-full mr-3"
        >
        <div>
          <div class="font-medium">{{ option.name }}</div>
          <div class="text-sm text-gray-500">{{ option.email }}</div>
        </div>
      </div>
    </template>
  </fwb-autocomplete>
</template>

<script setup>
import { ref } from 'vue'
import { FwbAutocomplete } from 'flowbite-vue'

const selectedUser = ref(null)
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', avatar: 'https://i.pravatar.cc/150?img=2' },
]
</script>

```

## Remote Data

Use `remote` with `@search` and `debounce` to fetch options from an API as the user types. Local filtering is disabled in remote mode.

<fwb-autocomplete-example-remote />

```vue
<template>
  <fwb-autocomplete
    v-model="selectedCountry"
    :options="countries"
    :loading="loading"
    :search-fields="['name']"
    display="name"
    label="Search countries"
    placeholder="Type to search countries..."
    remote
    :min-chars="2"
    :debounce="500"
    @search="searchCountries"
  >
    <template #option="{ option }">
      <div class="flex items-center space-x-3">
        <span class="text-2xl">{{ option.flag }}</span>
        <div>
          <div class="font-medium">{{ option.name }}</div>
          <div class="text-sm text-gray-500">{{ option.region }}</div>
        </div>
      </div>
    </template>
  </fwb-autocomplete>
</template>

<script setup>
import { ref } from 'vue'
import { FwbAutocomplete } from 'flowbite-vue'

const selectedCountry = ref(null)
const countries = ref([])
const loading = ref(false)

const searchCountries = async (query) => {
  loading.value = true
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${query}`)
    const data = await response.json()
    countries.value = data.slice(0, 10).map(country => ({
      name: country.name.common,
      region: country.region,
      flag: country.flag,
    }))
  } catch {
    countries.value = []
  } finally {
    loading.value = false
  }
}
</script>

```

## Custom Input

Replace the default `FwbInput` with any Vue input component via the `inputComponent` prop. Extra props for the input component are forwarded via `inputProps`.

<fwb-autocomplete-example-custom-input />

```vue
<template>
  <fwb-autocomplete
    v-model="selected"
    :options="options"
    :input-component="CustomInput"
    :input-props="{
      prefixIcon: 'search',
      theme: 'rounded',
      class: 'custom-styling'
    }"
  />
</template>

```

## Styling

Use dedicated props to pass classes to individual elements.

<fwb-autocomplete-example-styling />

```vue
<template>
  <fwb-autocomplete
    v-model="selected"
    :options="countries"
    :search-fields="['name']"
    class="bg-amber-100 dark:bg-green-900 border-2 border-amber-500 has-[input:focus]:border-amber-900 dark:border-green-600 dark:has-[input:focus]:border-green-400 has-[input:focus]:ring-amber-300 dark:has-[input:focus]:ring-green-800"
    display="name"
    dropdown-class="border-amber-300 dark:border-green-700"
    input-class="text-amber-900 dark:text-green-100 placeholder:text-amber-500 dark:placeholder:text-green-500"
    label="Select a country"
    label-class="text-xl font-bold text-amber-900 dark:text-green-200"
    placeholder="Search countries..."
    wrapper-class="bg-amber-300 dark:bg-green-800 border-2 border-amber-700 dark:border-green-400 rounded-lg p-3"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbAutocomplete } from 'flowbite-vue'

const selected = ref(null)
const countries = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'France', code: 'FR' },
]
</script>

```

## Autocomplete component API

### FwbAutocomplete Props

:::tip Native attribute passthrough
`FwbAutocomplete` sets `inheritAttrs: false` and forwards all extra attributes (e.g. `name`, `form`, `autofocus`) directly to the underlying `<input>` element via `FwbInput`.
:::

| Name             | Type                                | Default              | Description                                                            |
| ---------------- | ----------------------------------- | -------------------- | ---------------------------------------------------------------------- |
| options          | `T[]`                               | —                    | Array of options to display in the dropdown. Required.                 |
| searchFields     | `string[]`                          | `[]`                 | Fields within each option to search against.                           |
| display          | `string \| ((option: T) => string)` | `undefined`          | Field name or function to render an option label.                      |
| valueField       | `string`                            | `undefined`          | Field name used as the unique key for each option.                     |
| placeholder      | `string`                            | `'Search...'`        | Placeholder text for the input.                                        |
| label            | `string`                            | `undefined`          | Label text rendered above the input.                                   |
| disabled         | `boolean`                           | `false`              | Disables the autocomplete.                                             |
| loading          | `boolean`                           | `false`              | Shows a loading indicator when `true`.                                 |
| loadingText      | `string`                            | `'Loading...'`       | Text shown in the dropdown while loading.                              |
| noResultsText    | `string`                            | `'No results found'` | Text shown when no options match the query.                            |
| minChars         | `number`                            | `0`                  | Minimum characters typed before filtering begins.                      |
| remote           | `boolean`                           | `false`              | Disables local filtering; relies on `@search` to populate `options`.   |
| debounce         | `number`                            | `300`                | Delay in ms before emitting `search` when `remote` is `true`.          |
| size             | `'sm' \| 'md' \| 'lg' \| 'xl'`      | `'md'`               | Controls padding and font size of the input.                           |
| validationMessage | `string`                           | `undefined`          | Validation feedback text; fallback for the `validationMessage` slot.   |
| validationStatus | `'success' \| 'error'`              | `undefined`          | Applies success or error colour styles.                                |
| class            | `String \| Object`                  | `''`                 | Added to the input wrapper element.                                    |
| inputClass       | `String \| Object`                  | `''`                 | Added to the `<input>` element (use for text and placeholder colours). |
| wrapperClass     | `String \| Object`                  | `''`                 | Added to the outer root `<div>`.                                       |
| labelClass       | `String \| Object`                  | `''`                 | Added to the `<label>` element.                                        |
| dropdownClass    | `String \| Object`                  | `''`                 | Added to the dropdown container.                                       |
| inputComponent   | `Component`                         | `FwbInput`           | Vue component used as the input field.                                 |
| inputProps       | `Record<string, any>`               | `{}`                 | Additional props forwarded to the input component.                     |
| zIndex           | `number`                            | `100`                | Z-index of the dropdown overlay.                                       |

:::tip Accessibility
`aria-describedby` is wired to the IDs of any rendered `validationMessage` (slot or prop) and `helper` slots, and merged with any `aria-describedby` value you pass as an attribute.
:::

### FwbAutocomplete Events

| Event             | Parameters         | Description                                                |
| ----------------- | ------------------ | ---------------------------------------------------------- |
| update:modelValue | `value: T \| null` | Emitted when the selected value changes.                   |
| select            | `option: T`        | Emitted when an option is clicked or confirmed with Enter. |
| search            | `query: string`    | Emitted when the search query changes.                     |

### FwbAutocomplete Slots

| Name              | Props                                     | Description                                                   |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------- |
| option            | `{ option: T, index: number }`            | Custom template for rendering each dropdown option.           |
| suffix            | `{ loading: boolean, clear: () => void }` | Replaces the default search/clear/loading icons in the input. |
| validationMessage | —                                         | Validation feedback rendered below the input. Takes priority over the `validationMessage` prop. |
| helper            | —                                         | Helper text rendered below the input.                         |
