<script setup>
import FwbCheckboxExample from './checkbox/examples/FwbCheckboxExample.vue'
import FwbCheckboxExampleChecked from './checkbox/examples/FwbCheckboxExampleChecked.vue'
import FwbCheckboxExampleDisabled from './checkbox/examples/FwbCheckboxExampleDisabled.vue'
import FwbCheckboxExampleLink from './checkbox/examples/FwbCheckboxExampleLink.vue'
</script>
# Vue Checkbox - Flowbite

## Default checkbox

<fwb-checkbox-example />
```vue
<template>
  <fwb-checkbox v-model="check" label="Default checkbox" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbCheckbox } from 'flowbite-vue'

const check = ref(false)
</script>
```

## Disabled checkbox

<fwb-checkbox-example-disabled />
```vue
<template>
  <fwb-checkbox v-model="check" disabled label="Disabled checkbox" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbCheckbox } from 'flowbite-vue'

const check = ref(false)
</script>
```

## Checked checkbox

<fwb-checkbox-example-checked />
```vue
<template>
  <fwb-checkbox v-model="check" label="Checked checkbox" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbCheckbox } from 'flowbite-vue'

const check = ref(true)
</script>
```

## Link with checkbox

<fwb-checkbox-example-link />
```vue
<template>
  <fwb-checkbox v-model="check">
    <fwb-a href="#">
      I agree with the terms and conditions.
    </fwb-a>
  </fwb-checkbox>
</template>

<script setup>
import { ref } from 'vue'
import { FwbA, FwbCheckbox } from 'flowbite-vue'

const check = ref(false)
</script>
```
