<script setup>
import AlertTypeExample from './alert/examples/AlertTypeExample.vue';
import AlertTitleExample from './alert/examples/AlertTitleExample.vue';
import AlertClosableExample from './alert/examples/AlertClosableExample.vue';
import AlertBorderExample from './alert/examples/AlertBorderExample.vue';
import AlertIconExample from './alert/examples/AlertIconExample.vue';
import AlertInlineExample from './alert/examples/AlertInlineExample.vue';
</script>

# Vue Alert Component - Flowbite

#### Show contextual information to your users using alert elements based on Tailwind CSS

---

:::tip
Original reference: [https://flowbite.com/docs/components/alert/](https://flowbite.com/docs/components/alert/)
:::

The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page.

Flowbite also includes dismissable alerts which can be hidden by the users by clicking on the close icon.

## Prop - type

```typescript
export type AlertType = 'info' | 'danger' | 'success' | 'warning' | 'dark'
defineProps({
    type: {
        type: String as PropType<AlertType>,
        default: 'info',
    },
})
```


<AlertTypeExample />

```vue
<script setup>
import { Alert } from 'flowbite-vue'
</script>
<template>
  <div class="flex flex-col">
    <Alert type="info" class="mb-2">Info</Alert>
    <Alert type="warning" class="mb-2">Warning</Alert>
    <Alert type="danger" class="mb-2">Danger</Alert>
    <Alert type="dark" class="mb-2">Dark</Alert>
    <Alert type="success">Success</Alert>
  </div>
</template>
```

## Prop - title

```typescript
defineProps({
    title: {
        type: String,
        default: '',
    },
})
```


<AlertTitleExample />

```vue
<script setup>
import { Alert } from 'flowbite-vue'
</script>
<template>
  <div class="flex flex-col">
    <Alert type="info" title="Some info title" class="mb-2">Info</Alert>
    <Alert type="warning" title="Some warning title" class="mb-2">Warning</Alert>
    <Alert type="danger" title="Some danger title" class="mb-2">Danger</Alert>
    <Alert type="dark" title="Some dark title" class="mb-2">Dark</Alert>
    <Alert type="success" title="Some success title">Success</Alert>
  </div>
</template>
```

## Prop - closable

```typescript
defineProps({
    closable: {
        type: Boolean,
        default: false,
    },
})
```


<AlertClosableExample />

```vue
<script setup>
import { Alert } from 'flowbite-vue'
</script>
<template>
  <div class="flex flex-col">
    <Alert type="info" closable class="mb-2">Info</Alert>
    <Alert type="warning" closable class="mb-2">Warning</Alert>
    <Alert type="danger" closable class="mb-2">Danger</Alert>
    <Alert type="dark" closable class="mb-2">Dark</Alert>
    <Alert type="success" closable>Success</Alert>
  </div>
</template>
```

## Prop - border

```typescript
defineProps({
    border: {
        type: Boolean,
        default: false,
    },
})
```


<AlertBorderExample />

```vue
<script setup>
import { Alert } from 'flowbite-vue'
</script>
<template>
  <div class="flex flex-col">
    <Alert type="info" border class="mb-2">Info</Alert>
    <Alert type="warning" border class="mb-2">Warning</Alert>
    <Alert type="danger" border class="mb-2">Danger</Alert>
    <Alert type="dark" border class="mb-2">Dark</Alert>
    <Alert type="success" border>Success</Alert>
  </div>
</template>
```

## Prop - icon

```typescript
defineProps({
    icon: {
        type: Boolean,
        default: true,
    },
})
```


<AlertIconExample />

```vue
<script setup>
import { Alert } from 'flowbite-vue'
</script>
<template>
  <div class="flex flex-col">
    <Alert type="info" :icon="false" class="mb-2">Info</Alert>
    <Alert title="WARNING" type="warning" :icon="false" class="mb-2">Warning</Alert>
    <Alert type="danger" :icon="false" class="mb-2">Danger</Alert>
    <Alert type="dark" :icon="false" class="mb-2">Dark</Alert>
    <Alert type="success" :icon="false">Success</Alert>
  </div>
</template>
```

## Prop - inline

```typescript
defineProps({
    inline: {
        type: Boolean,
        default: true,
    },
})
```


<AlertInlineExample />

```vue
<script setup>
import { Alert } from 'flowbite-vue'
</script>
<template>
  <div class="flex flex-col">
    <Alert type="info" title="Info title" :inline="false" class="mb-2">
      Lorem...
    </Alert>
    <Alert type="warning" title="Warning title" :inline="false" class="mb-2">
      Lorem...
    </Alert>
    <Alert type="danger" title="Danger title" :inline="false" class="mb-2">
      Lorem...
    </Alert>
    <Alert closable type="dark" title="Dark title" :inline="false" class="mb-2">
      Lorem...
    </Alert>
    <Alert type="success" title="Success title" :inline="false">
      Lorem...
      <template #actions>
        <Button size="sm" color="green" class="mr-2">
          Buttons everywhere
        </Button>
        <Button size="sm" outline color="green">
          <template #prefix>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
          </template>
          And here
        </Button>
      </template>
    </Alert>
  </div>
</template>
```
