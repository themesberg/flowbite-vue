<script setup>
import FwbJumbotronExample from './jumbotron/examples/FwbJumbotronExample.vue';
import FwbJumbotronButtonExample from './jumbotron/examples/FwbJumbotronButtonExample.vue';
import FwbJumbotronDividerExample from './jumbotron/examples/FwbJumbotronDividerExample.vue';
import FwbJumbotronHeaderLvlExample from './jumbotron/examples/FwbJumbotronHeaderLvlExample.vue';
import FwbJumbotronChangedBgExample from './jumbotron/examples/FwbJumbotronChangedBgExample.vue';
</script>

# Vue Jumbotron - Flowbite

#### Most important information block based on Tailwind CSS

## Default Jumbotron
Common jumbotron usage with header text, sub text and body

<fwb-jumbotron-example />
```vue
<template>
  <div class="vp-raw">
    <fwb-jumbotron
      header-text="Jumbotron header text"
      sub-text="Longer subtext shows additional information."
    >
      And jumbotron body text
    </fwb-jumbotron>
  </div>
</template>

<script setup>
import FwbJumbotron from '@/components/FwbJumbotron/FwbJumbotron.vue'
</script>
```

## Changed header level
Header level is able to be changed by prop `header-level`

<fwb-jumbotron-header-lvl-example />
```vue
<template>
  <div class="vp-raw">
    <fwb-jumbotron
      header-text="Jumbotron header text"
      sub-text="Longer subtext shows additional information."
      header-level="6"
    >
      And jumbotron body text
    </fwb-jumbotron>
  </div>
</template>

<script setup>
import FwbJumbotron from '@/components/FwbJumbotron/FwbJumbotron.vue'
</script>

```

## Changed background
Jumbotron styles such as background can be changes by `class`

<fwb-jumbotron-changed-bg-example />
```vue
<template>
  <div
    class="vp-raw"
  >
    <fwb-jumbotron
      class="dark:bg-green-700"
      header-text="Jumbotron header text"
      sub-text="Longer subtext shows additional information."
    >
      And jumbotron body text
    </fwb-jumbotron>
  </div>
</template>

<script setup>
import FwbJumbotron from '@/components/FwbJumbotron/FwbJumbotron.vue'
</script>

```

## Custom content Jumbotron
You can provide any content you want such as buttons, custom text blocks or anything else.

<fwb-jumbotron-button-example />
```vue
<template>
  <div class="vp-raw">
    <fwb-jumbotron
      header-text="Jumbotron header text"
      sub-text="Longer subtext shows additional information."
    >
      <div class="flex justify-between">
        <span>block</span><span>another block</span>
      </div>
    </fwb-jumbotron>
  </div>
</template>

<script setup>
import FwbJumbotron from '@/components/FwbJumbotron/FwbJumbotron.vue'
</script>
```

## Custom divider jumbotron
Also possible to provide your own divider by properly slot or remove it by prop `divider="false"`

<fwb-jumbotron-divider-example />
```vue
<template>
  <div class="vp-raw">
    <fwb-jumbotron
      header-text="Jumbotron header text"
      sub-text="Longer subtext shows additional information."
    >
      <template #divider>
        <div class="my-8">
          ----------------------Im a custom divider----------------------
        </div>
      </template>
      And jumbotron body text
    </fwb-jumbotron>
  </div>
</template>

<script setup>
import FwbJumbotron from '@/components/FwbJumbotron/FwbJumbotron.vue'
</script>

```

## API

### Props
| Name        | Values                      | Default |
|-------------|-----------------------------|---------|
| headerLevel | `1`, `2`, `3`,`4`, `5`, `6` | `1`     |
| divider     | `boolean`                   | `true`  |
| subText     | `string`                    | ``      |
| headerText  | `string`                    | ``      |

### Slots
| Name          | Description                  |
|---------------|------------------------------|
| default       | jumbotron content            |
| headerContent | custom content inside header |
| divider       | custom divider               |
