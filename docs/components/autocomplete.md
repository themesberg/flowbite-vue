<script setup>
import FwbAutocompleteExample from './autocomplete/examples/FwbAutocompleteExample.vue'
import FwbAutocompleteExampleRemote from './autocomplete/examples/FwbAutocompleteExampleRemote.vue'
import FwbAutocompleteExampleCustom from './autocomplete/examples/FwbAutocompleteExampleCustom.vue'
import FwbAutocompleteExampleCustomInput from './autocomplete/examples/FwbAutocompleteExampleCustomInput.vue'
import FwbAutocompleteExampleValidation from './autocomplete/examples/FwbAutocompleteExampleValidation.vue'
import FwbAutocompleteExampleSize from './autocomplete/examples/FwbAutocompleteExampleSize.vue'
</script>

# Vue Autocomplete - Flowbite

Get started with the autocomplete component to allow users to search and select from a list of options with real-time filtering and keyboard navigation.

---

:::tip
Based on the Flowbite design system: [https://flowbite.com/docs/forms/input-field/](https://flowbite.com/docs/forms/input-field/)
:::

The autocomplete component supports real-time filtering, keyboard navigation, remote data loading, and custom option rendering. Built with Tailwind CSS utility classes and fully compatible with dark mode.

## Default

<fwb-autocomplete-example />
```vue
<template>
  <fwb-autocomplete
    v-model="selectedCountry"
    :options="countries"
    search-fields="name"
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

## Remote Data with Debounce

<fwb-autocomplete-example-remote />
```vue
<template>
  <fwb-autocomplete
    v-model="selectedCountry"
    :options="countries"
    :loading="loading"
    search-fields="name"
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
      capital: country.capital?.[0] || 'N/A',
      region: country.region,
      population: country.population,
      flag: country.flag,
    }))
  } catch (err) {
    countries.value = []
  } finally {
    loading.value = false
  }
}
</script>
```

## Custom Input Components

<fwb-autocomplete-example-custom-input />

The autocomplete component provides maximum flexibility by allowing you to use any Vue input component through the `inputComponent` and `inputProps` props.

### Using Custom Input Components

```vue
<template>
  <!-- Use any Vue input component -->
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

  <!-- Customize FwbInput with props -->
  <fwb-autocomplete
    v-model="selected"
    :options="options"
    :input-props="{
      size: 'lg',
      class: 'border-purple-300 focus:border-purple-500'
    }"
  />
</template>
```

### Input Component Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `inputComponent` | `Component` | `FwbInput` | The Vue input component to use |
| `inputProps` | `Record<string, any>` | `{}` | Additional props to pass to the input component |

The component automatically passes through standard props like `placeholder`, `disabled`, `size`, `label`, etc., and you can provide additional props via `inputProps`.

## Custom Option Template

<fwb-autocomplete-example-custom />
```vue
<template>
  <fwb-autocomplete
    v-model="selectedUser"
    :options="users"
    search-fields="name,email"
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
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2'
  },
]
</script>
```

## Validation

<fwb-autocomplete-example-validation />
```vue
<template>
  <fwb-autocomplete
    v-model="selectedCountry"
    :options="countries"
    search-fields="name"
    display="name"
    label="Country *"
    placeholder="Select a country..."
    :validation-status="validationStatus"
  >
    <template #validationMessage>
      Please select a country
    </template>
    <template #helper>
      Choose the country where you reside
    </template>
  </fwb-autocomplete>
</template>

<script setup>
import { ref, computed } from 'vue'
import { FwbAutocomplete } from 'flowbite-vue'

const selectedCountry = ref(null)
const countries = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'France', code: 'FR' },
]

const validationStatus = computed(() => {
  return selectedCountry.value ? 'success' : 'error'
})
</script>
```

## Sizes

<fwb-autocomplete-example-size />
```vue
<template>
  <div class="space-y-4">
    <fwb-autocomplete
      v-model="selected1"
      :options="countries"
      search-fields="name"
      display="name"
      label="Small"
      size="sm"
      placeholder="Small autocomplete..."
    />
    
    <fwb-autocomplete
      v-model="selected2"
      :options="countries"
      search-fields="name"
      display="name"
      label="Medium (default)"
      size="md"
      placeholder="Medium autocomplete..."
    />
    
    <fwb-autocomplete
      v-model="selected3"
      :options="countries"
      search-fields="name"
      display="name"
      label="Large"
      size="lg"
      placeholder="Large autocomplete..."
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbAutocomplete } from 'flowbite-vue'

const selected1 = ref(null)
const selected2 = ref(null)
const selected3 = ref(null)

const countries = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'France', code: 'FR' },
]
</script>
```

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `T \| null` | `null` | The currently selected option |
| `options` | `T[]` | `[]` | Array of options to display in dropdown |
| `loading` | `boolean` | `false` | Shows loading indicator when true |
| `placeholder` | `string` | `'Search...'` | Placeholder text for input field |
| `disabled` | `boolean` | `false` | Disables the autocomplete component |
| `valueField` | `string` | `undefined` | Field name to use as unique identifier for options |
| `searchFields` | `string[]` | `[]` | Array of field names to search within each option |
| `loadingText` | `string` | `'Loading...'` | Text to display when loading |
| `noResultsText` | `string` | `'No results found'` | Text to display when no results match |
| `minChars` | `number` | `0` | Minimum characters required before filtering |
| `remote` | `boolean` | `false` | Whether to fetch data remotely (disables local filtering) |
| `debounce` | `number` | `300` | Debounce delay in milliseconds for search events |
| `display` | `string \| ((option: T) => string)` | `undefined` | Field name or function to generate display text for options |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the input component |
| `validationStatus` | `'success' \| 'error'` | `undefined` | Validation status for styling |
| `class` | `string \| Record<string, boolean>` | `''` | Additional CSS classes for the component |
| `wrapperClass` | `string \| Record<string, boolean>` | `''` | CSS classes for the wrapper element |
| `labelClass` | `string \| Record<string, boolean>` | `''` | CSS classes for the label element |
| `dropdownClass` | `string \| Record<string, boolean>` | `''` | CSS classes for the dropdown container |
| `label` | `string` | `undefined` | Label text for the input field |
| `inputComponent` | `Component` | `FwbInput` | Vue component to use as the input field |
| `inputProps` | `Record<string, any>` | `{}` | Additional props to pass to the input component |

### Input Component Props

The autocomplete component uses `FwbInput` by default and passes through all standard input props. For a complete list of available input props, see the [Input component documentation](./input.md#input-component-api).

Common input props that can be passed through:
- `placeholder` - Input placeholder text
- `disabled` - Disable the input
- `size` - Input size (`'sm'` | `'md'` | `'lg'`)
- `label` - Input label text
- `class` - CSS classes for styling
- `inputClass` - CSS classes for the input element
- `wrapperClass` - CSS classes for the input wrapper
- `labelClass` - CSS classes for the label

You can also pass additional props via the `inputProps` prop or use a completely different input component via the `inputComponent` prop.

### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `update:modelValue` | `value: T \| null` | Emitted when the selected value changes |
| `select` | `option: T` | Emitted when an option is selected |
| `search` | `query: string` | Emitted when the search query changes |

### Slots

| Slot | Props | Description |
|------|-------|-------------|
| `option` | `{ option: T, index: number }` | Custom template for rendering dropdown options |
| `suffix` | `{ loading: boolean, clear: () => void }` | Custom suffix content (overrides default loading/clear icons) |
| `validationMessage` | - | Custom validation message content |
| `helper` | - | Helper text content below the input |

### Examples

#### Basic Usage
```vue
<fwb-autocomplete
  v-model="selected"
  :options="countries"
  search-fields="name"
  display="name"
  placeholder="Search countries..."
/>
```

#### Remote Data with Custom Input Props
```vue
<fwb-autocomplete
  v-model="selected"
  :options="users"
  :loading="loading"
  search-fields="name,email"
  display="name"
  remote
  :debounce="500"
  :input-props="{
    size: 'lg',
    class: 'border-blue-300 focus:border-blue-500'
  }"
  @search="fetchUsers"
/>
```

#### Custom Input Component
```vue
<fwb-autocomplete
  v-model="selected"
  :options="options"
  :input-component="MyCustomInput"
  :input-props="{ theme: 'rounded', prefixIcon: 'search' }"
/>
```