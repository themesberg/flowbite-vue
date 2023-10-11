<script setup>
import DefaultRadio from './radio/examples/DefaultRadio.vue'
import DisabledRadio from './radio/examples/DisabledRadio.vue'
import ListRadio from './radio/examples/ListRadio.vue'
import HorizontalListRadio from './radio/examples/HorizontalListRadio.vue'
import InlineRadio from './radio/examples/InlineRadio.vue'
import LinkRadio from './radio/examples/LinkRadio.vue'
import BorderedRadio from './radio/examples/BorderedRadio.vue'
</script>

# Vue Toggle Radio - Flowbite

#### Get started with the radio component to let the user choose a single option from multiple options in the form of a circle based on multiple styles and colors

---

:::tip
Original reference: [https://flowbite.com/docs/forms/range/](https://flowbite.com/docs/forms/radio/)
:::

## Radio examples

```vue
<template>
  <div>
    <fwb-radio
      v-model="picked"
      name="default radio"
      value="one"
      label="Default radio"
    />
    <fwb-radio
      v-model="picked"
      name="default radio"
      value="two"
      label="Checked state"
    />
  </div>
</template>

<script setup>
import { FwbRadio } from 'flowbite-vue'
import { ref } from 'vue'

const picked = ref('one')
</script>
```

<DefaultRadio />

## Disabled Radio

```vue
<template>
  <div>
    <fwb-radio
        v-model="picked"
        name="disabled-radio"
        value="one"
        label="Disabled radio"
        :disabled="true"
    />
    <fwb-radio
        v-model="picked"
        name="disabled-radio"
        value="two"
        label="Disabled checked"
        :disabled="true"
    />
  </div>
</template>

<script setup>
  import { FwbRadio } from 'flowbite-vue'
</script>
```

<DisabledRadio />

## Radio list group

```vue
<template>
  <div>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">
      Technology <span class="capitalize">{{ picked }}</span>
    </p>
    <ul
        class="w-48 !p-0 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <li class="w-full !m-0 pl-3 flex border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <fwb-radio
            v-model="picked"
            name="list-radio"
            value="svelte"
            label="Svelte"
        />
      </li>
      <li class="w-full !m-0 pl-3 flex border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <fwb-radio
            v-model="picked"
            name="list-radio"
            value="vue"
            label="Vue JS"
        />
      </li>
      <li class="w-full !m-0 pl-3 flex border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <fwb-radio
            v-model="picked"
            name="list-radio"
            value="react"
            label="React"
        />
      </li>
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <fwb-radio
            v-model="picked"
            name="list-radio"
            value="angular"
            label="Angular"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { FwbRadio } from 'flowbite-vue'
  import { ref } from 'vue'

  const picked = ref('svelte')
</script>
```

<ListRadio />

## Horizontal list group

```vue
<template>
  <div>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">
      Technology <span class="capitalize">{{ picked1 }}</span>
    </p>
    <ul
        class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <fwb-radio
            v-model="picked1"
            name="hor-radio"
            value="svelte"
            label="Svelte"
        />
      </li>
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <fwb-radio
            v-model="picked1"
            name="hor-radio"
            value="vue"
            label="Vue JS"
        />
      </li>
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <fwb-radio
            v-model="picked1"
            name="hor-radio"
            value="react"
            label="React"
        />
      </li>
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <fwb-radio
            v-model="picked1"
            name="hor-radio"
            value="angular"
            label="Angular"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { FwbRadio } from 'flowbite-vue'
  import { ref } from 'vue'

  const picked1 = ref('svelte')
</script>

```

<HorizontalListRadio />

## Inline Radio

```vue
<template>
  <div class="flex w-96">
    <fwb-radio
        v-model="picked"
        value="first"
        label="Inline 1"
    />
    <fwb-radio
        v-model="picked"
        value="sec"
        label="Inline 2"
    />
    <fwb-radio
        v-model="picked"
        value="third"
        label="Inline 3"
    />
    <fwb-radio
        v-model="picked"
        value="fourth"
        label="Inline 4"
    />
  </div>
</template>

<script setup>
  import { FwbRadio } from 'flowbite-vue'
  import { ref } from 'vue'

  const picked = ref('first')
</script>

```

<InlineRadio />

## Radio with a link

```vue
<template>
  <div>
    <fwb-radio
        v-model="picked"
        value="first"
        name="with-link"
    >
      I agree with the
      <a
          href="/"
          class="text-primary-600 dark:text-primary-500 hover:underline ml-1"
      >
        terms and conditions
      </a>.
    </fwb-radio>
  </div>
</template>

<script setup>
  import { FwbRadio } from 'flowbite-vue'
  import { ref } from 'vue'

  const picked = ref('first')
</script>

```

<LinkRadio />

## Bordered Radio

```vue
<template>
  <div class="grid grid-cols-2 gap-6">
    <div class="flex items-center p-2 border border-gray-200 rounded dark:border-gray-700">
      <fwb-radio
          v-model="picked"
          value="fs"
          label="Radio 1"
      />
    </div>
    <div class="flex items-center p-2 border border-gray-200 rounded dark:border-gray-700">
      <fwb-radio
          v-model="picked"
          value="sec"
          label="Radio 2"
      />
    </div>
  </div>
</template>

<script setup>
  import { FwbRadio } from 'flowbite-vue'
  import { ref } from 'vue'

  const picked = ref('fs')
</script>

```

<BorderedRadio />
