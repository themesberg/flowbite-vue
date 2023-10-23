<script setup>
import FwbTableExample from './table/examples/FwbTableExample.vue'
import FwbTableExampleHoverable from './table/examples/FwbTableExampleHoverable.vue'
import FwbTableExampleStriped from './table/examples/FwbTableExampleStriped.vue'
import FwbTableExampleStripedColumns from './table/examples/FwbTableExampleStripedColumns.vue'
</script>
# Vue Table - Flowbite

#### Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line

---

:::tip
Original reference: [https://flowbite.com/docs/components/tables/](https://flowbite.com/docs/components/tables/)
:::

## Basic example

<fwb-table-example />
```vue
<template>
  <fwb-table>
    <fwb-table-head>
      <fwb-table-head-cell>Product name</fwb-table-head-cell>
      <fwb-table-head-cell>Color</fwb-table-head-cell>
      <fwb-table-head-cell>Category</fwb-table-head-cell>
      <fwb-table-head-cell>Price</fwb-table-head-cell>
      <fwb-table-head-cell>
        <span class="sr-only">Edit</span>
      </fwb-table-head-cell>
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row>
        <fwb-table-cell>Apple MacBook Pro 17"</fwb-table-cell>
        <fwb-table-cell>Sliver</fwb-table-cell>
        <fwb-table-cell>Laptop</fwb-table-cell>
        <fwb-table-cell>$2999</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#">
            Edit
          </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-cell>Microsoft Surface Pro</fwb-table-cell>
        <fwb-table-cell>White</fwb-table-cell>
        <fwb-table-cell>Laptop PC</fwb-table-cell>
        <fwb-table-cell>$1999</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#">
            Edit
          </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-cell>Magic Mouse 2</fwb-table-cell>
        <fwb-table-cell>Black</fwb-table-cell>
        <fwb-table-cell>Accessories</fwb-table-cell>
        <fwb-table-cell>$99</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#">
            Edit
          </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
</template>

<script setup>
import {
  FwbA,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from 'flowbite-vue'
</script>
```

## Striped example

<fwb-table-example-striped />
```vue
<template>
  <fwb-table striped>
    <fwb-table-head>
      <fwb-table-head-cell>Product name</fwb-table-head-cell>
      <fwb-table-head-cell>Color</fwb-table-head-cell>
      <fwb-table-head-cell>Category</fwb-table-head-cell>
      <fwb-table-head-cell>Price</fwb-table-head-cell>
      <fwb-table-head-cell>
        <span class="sr-only">Edit</span>
      </fwb-table-head-cell>
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row>
        <fwb-table-cell>Apple MacBook Pro 17"</fwb-table-cell>
        <fwb-table-cell>Sliver</fwb-table-cell>
        <fwb-table-cell>Laptop</fwb-table-cell>
        <fwb-table-cell>$2999</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#">
            Edit
          </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-cell>Microsoft Surface Pro</fwb-table-cell>
        <fwb-table-cell>White</fwb-table-cell>
        <fwb-table-cell>Laptop PC</fwb-table-cell>
        <fwb-table-cell>$1999</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#">
            Edit
          </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-cell>Magic Mouse 2</fwb-table-cell>
        <fwb-table-cell>Black</fwb-table-cell>
        <fwb-table-cell>Accessories</fwb-table-cell>
        <fwb-table-cell>$99</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#">
            Edit
          </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
</template>

<script setup>
import {
  FwbA,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from 'flowbite-vue'
</script>

```

## Striped columns example

<fwb-table-example-striped-columns />
```vue
<template>
  <fwb-table striped-columns>
    <fwb-table-head>
      <fwb-table-head-cell>Product name</fwb-table-head-cell>
      <fwb-table-head-cell>Color</fwb-table-head-cell>
      <fwb-table-head-cell>Category</fwb-table-head-cell>
      <fwb-table-head-cell>Price</fwb-table-head-cell>
      <fwb-table-head-cell><span class="sr-only">Edit</span></fwb-table-head-cell>
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row>
        <fwb-table-cell>Apple MacBook Pro 17"</fwb-table-cell>
        <fwb-table-cell>Sliver</fwb-table-cell>
        <fwb-table-cell>Laptop</fwb-table-cell>
        <fwb-table-cell>$2999</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#">
            Edit
          </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-cell>Microsoft Surface Pro</fwb-table-cell>
        <fwb-table-cell>White</fwb-table-cell>
        <fwb-table-cell>Laptop PC</fwb-table-cell>
        <fwb-table-cell>$1999</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#">
            Edit
          </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-cell>Magic Mouse 2</fwb-table-cell>
        <fwb-table-cell>Black</fwb-table-cell>
        <fwb-table-cell>Accessories</fwb-table-cell>
        <fwb-table-cell>$99</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#">
            Edit
          </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
</template>

<script setup>
import {
  FwbA,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from 'flowbite-vue'
</script>
```

## Hoverable example

<fwb-table-example-hoverable />
```vue
<template>
  <fwb-table hoverable>
    <fwb-table-head>
      <fwb-table-head-cell>Product name</fwb-table-head-cell>
      <fwb-table-head-cell>Color</fwb-table-head-cell>
      <fwb-table-head-cell>Category</fwb-table-head-cell>
      <fwb-table-head-cell>Price</fwb-table-head-cell>
      <fwb-table-head-cell>
        <span class="sr-only">Edit</span>
      </fwb-table-head-cell>
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row>
        <fwb-table-cell>Apple MacBook Pro 17"</fwb-table-cell>
        <fwb-table-cell>Sliver</fwb-table-cell>
        <fwb-table-cell>Laptop</fwb-table-cell>
        <fwb-table-cell>$2999</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#">
            Edit
          </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-cell>Microsoft Surface Pro</fwb-table-cell>
        <fwb-table-cell>White</fwb-table-cell>
        <fwb-table-cell>Laptop PC</fwb-table-cell>
        <fwb-table-cell>$1999</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#">
            Edit
          </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-cell>Magic Mouse 2</fwb-table-cell>
        <fwb-table-cell>Black</fwb-table-cell>
        <fwb-table-cell>Accessories</fwb-table-cell>
        <fwb-table-cell>$99</fwb-table-cell>
        <fwb-table-cell>
          <fwb-a href="#">
            Edit
          </fwb-a>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
</template>

<script setup>
import {
  FwbA,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from 'flowbite-vue'
</script>
```
