<script setup>
import FwbAutocompleteExample from './autocomplete/examples/FwbAutocompleteExample.vue'
import FwbAutocompleteExampleRemote from './autocomplete/examples/FwbAutocompleteExampleRemote.vue'
import FwbAutocompleteExampleCustom from './autocomplete/examples/FwbAutocompleteExampleCustom.vue'
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
| `modelValue` | `T \| null` | `null` | The selected option |
| `options` | `T[]` | `[]` | Array of options to choose from |
| `loading` | `boolean` | `false` | Show loading state |
| `placeholder` | `string` | `'Search...'` | Input placeholder text |
| `disabled` | `boolean` | `false` | Disable the input |
| `valueField` | `string` | `undefined` | Field to use for option value |
| `searchFields` | `string[]` | `[]` | Fields to search in options |
| `loadingText` | `string` | `'Loading...'` | Text to show when loading |
| `noResultsText` | `string` | `'No results found'` | Text to show when no results |
| `minChars` | `number` | `0` | Minimum characters to start filtering |
| `remote` | `boolean` | `false` | Whether to use remote data loading |
| `debounce` | `number` | `300` | Debounce delay in ms for remote searches |
| `display` | `string \| function` | `undefined` | Field or function to display option label |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `validationStatus` | `'success' \| 'error'` | `undefined` | Validation status |
| `label` | `string` | `undefined` | Label text |

### Events

| Name | Parameters | Description |
|------|------------|-------------|
| `update:modelValue` | `value: T \| null` | Emitted when selection changes |
| `select` | `option: T` | Emitted when an option is selected |
| `search` | `query: string` | Emitted when search query changes |

### Slots

| Name | Props | Description |
|------|-------|-------------|
| `option` | `{ option, index }` | Custom option template |
| `validationMessage` | - | Validation message content |
| `helper` | - | Helper text content | 