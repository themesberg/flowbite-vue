<script setup>
import CheckboxDefault from './checkbox/examples/CheckboxDefault.vue'
import CheckboxDisabled from './checkbox/examples/CheckboxDisabled.vue'
import CheckboxChecked from './checkbox/examples/CheckboxChecked.vue'
import CheckboxLink from './checkbox/examples/CheckboxLink.vue'
</script>
# Vue Footer Component - Flowbite

## Default checkbox

```vue
<script setup>
import { Checkbox } from 'flowbite-vue'
import { ref } from 'vue'

const ref1 = ref(false)
</script>
<template>
  <Checkbox v-model:value="ref1" label="Default checkbox" />
</template>
```

<CheckboxDefault />

## Disabled checkbox

```vue
<script setup>
import { Checkbox } from 'flowbite-vue'
import { ref } from 'vue'

const ref1 = ref(false)
</script>
<template>
  <Checkbox v-model:value="ref1" label="Disabled checkbox" :disabled="true" />
</template>
```

<CheckboxDisabled />

## Checked checkbox

```vue
<script setup>
import { Checkbox } from 'flowbite-vue'
import { ref } from 'vue'

const ref1 = ref(true)
</script>
<template>
  <Checkbox v-model:value="ref1" label="Checked checkbox" />
</template>
```

<CheckboxChecked />

## Link with checkbox

```vue
<template>
  <div>
    <Checkbox>
      <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline ml-1">I agree with the terms and conditions</a>.
    </Checkbox>
  </div>
</template>
```

<CheckboxLink />
