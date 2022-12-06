<script setup>
import TabsDefaultExample from './examples/TabsDefaultExample.vue';
import TabsPillsExample from './examples/TabsPillsExample.vue';
import TabsUnderlineExample from './examples/TabsUnderlineExample.vue';
</script>

# Vue Tabs Component - Flowbite

#### Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container

---

:::tip
Original reference: [https://flowbite.com/docs/components/tabs/](https://flowbite.com/docs/components/tabs/)
:::

The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.

## Prop - variant (default)

```typescript
export type TabsVariant = 'default' | 'underline' | 'pills'

defineProps({
    variant: {
        type: String as PropType<TabsVariant>,
        default: 'default',
    },
})
```


<TabsDefaultExample />

```vue
<script setup>
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'
const activeTab = ref('first')
</script>
<template>
  <tabs v-model="activeTab" class="p-5"> <!-- class appends to content DIV for all tabs -->
    <tab name="first" title="First">
      Lorem...
    </tab>
    <tab name="second" title="Second">
      Lorem...
    </tab>
    <tab name="third" title="Third">
      Lorem...
    </tab>
    <tab name="fourth" title="Fourth" :disabled="true">
      Lorem...
    </tab>
  </tabs>
</template>
```

## Prop - variant (underline)

<TabsUnderlineExample />

```vue
<script setup>
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'
const activeTab = ref('first')
</script>
<template>
  <tabs variant="underline" v-model="activeTab" class="p-5"> <!-- class appends to content DIV for all tabs -->
    <tab name="first" title="First">
      Lorem...
    </tab>
    <tab name="second" title="Second">
      Lorem...
    </tab>
    <tab name="third" title="Third">
      Lorem...
    </tab>
    <tab name="fourth" title="Fourth" :disabled="true">
      Lorem...
    </tab>
  </tabs>
</template>
```

## Prop - variant (pills)

<TabsPillsExample />


```vue
<script setup>
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'
const activeTab = ref('first')
</script>
<template>
  <tabs variant="pills" v-model="activeTab" class="p-5"> <!-- class appends to content DIV for all tabs -->
    <tab name="first" title="First">
      Lorem...
    </tab>
    <tab name="second" title="Second">
      Lorem...
    </tab>
    <tab name="third" title="Third">
      Lorem...
    </tab>
    <tab name="fourth" title="Fourth" :disabled="true">
      Lorem...
    </tab>
  </tabs>
</template>
```

## Prop - directive

Use this props if you want to control which directive to use for rendering every tab content

```typescript
export type TabsVariant = 'default' | 'underline' | 'pills'

defineProps({
    directive: {
        type: String as PropType<'if' | 'show'>,
        default: 'if',
    },
})
```
