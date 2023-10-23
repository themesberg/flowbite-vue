<script setup>
import FwbTabsExample from './tabs/examples/FwbTabsExample.vue'
import FwbTabsExampleInteraction from './tabs/examples/FwbTabsExampleInteraction.vue'
import FwbTabsExampleDirective from './tabs/examples/FwbTabsExampleDirective.vue'
import FwbTabsExamplePills from './tabs/examples/FwbTabsExamplePills.vue'
import FwbTabsExampleUnderline from './tabs/examples/FwbTabsExampleUnderline.vue'
</script>

# Vue Tabs - Flowbite

#### Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container

---

:::tip
Original reference: [https://flowbite.com/docs/components/tabs/](https://flowbite.com/docs/components/tabs/)
:::

The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.

## Prop - variant (default)

<fwb-tabs-example />
```vue
<template>
  <fwb-tabs v-model="activeTab" class="p-5">
    <fwb-tab name="first" title="First">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="second" title="Second">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="third" title="Third">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')
</script>
```

## Prop - variant (underline)

<fwb-tabsExample-underline />
```vue
<template>
  <fwb-tabs v-model="activeTab" variant="underline" class="p-5">
    <fwb-tab name="first" title="First">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="second" title="Second">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="third" title="Third">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')
</script>
```

## Prop - variant (pills)

<fwb-tabs-example-pills />
```vue
<template>
  <fwb-tabs v-model="activeTab" variant="pills" class="p-5">
    <fwb-tab name="first" title="First" >
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="second" title="Second">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="third" title="Third">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </fwb-tab>
  </fwb-tabs>
 </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')
</script>
```

## Prop - directive

Use this props if you want to control which directive to use for rendering every tab content

<fwb-tabs-example-directive />
```vue
<template>
  <fwb-tabs v-model="activeTab" directive="show" class="p-5">
    <fwb-tab name="first" title="First">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="second" title="Second">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="third" title="Third">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')
</script>
```

## Tab pane interaction

You can add `@click:pane` to Tabs component to intercept click on tab pane.

<fwb-tabs-example-interaction />
```vue
<template>
  <fwb-tabs @click:pane="handlePaneClick" v-model="activeTab" class="p-5">
    <fwb-tab name="first" title="First">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="second" title="Second">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="third" title="Third">
      Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')

const handlePaneClick = () => { console.log('Click!') }
</script>
```

## API

### Props
| Name       | Values                         | Default   |
|------------|--------------------------------|-----------|
| directive  | `if`, `show`                   | `if`      |
| modelValue | `string`                       | `''`      |
| variant    | `default`, `underline`, `pill` | `default` |
