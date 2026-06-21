<script setup>
import FwbTableExample from './table/examples/FwbTableExample.vue'
import FwbTableExampleHoverable from './table/examples/FwbTableExampleHoverable.vue'
import FwbTableExampleStriped from './table/examples/FwbTableExampleStriped.vue'
import FwbTableExampleStripedColumns from './table/examples/FwbTableExampleStripedColumns.vue'
</script>

# Table - Flowbite Vue

#### Use the table component to display structured data in rows and columns with support for striped rows, striped columns, and hoverable row highlights

---

:::tip Table - Flowbite
Original reference: [https://flowbite.com/docs/components/tables/](https://flowbite.com/docs/components/tables/)
:::

The table component can be used to display structured data in rows and columns, with Tailwind CSS styling for striped rows, striped columns, and hoverable row highlights — all compatible with dark mode.

## Default

Use `FwbTable` with `FwbTableHead`, `FwbTableBody`, `FwbTableRow`, `FwbTableHeadCell`, and `FwbTableCell` to compose a structured data table.

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

## Striped Rows

Add the `striped` prop to apply alternating background colors to table rows, making the data easier to read.

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

## Striped Columns

Add the `striped-columns` prop to apply alternating background colors to columns instead of rows.

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

## Hoverable

Add the `hoverable` prop to highlight the row under the cursor, useful for interactive tables.

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

## Table component API

### FwbTable Props

| Name           | Type      | Default | Description                                               |
| -------------- | --------- | ------- | --------------------------------------------------------- |
| hoverable      | `Boolean` | `false` | Highlights the row under the cursor on hover.             |
| striped        | `Boolean` | `false` | Applies alternating background colors to rows.            |
| stripedColumns | `Boolean` | `false` | Applies alternating background colors to columns.         |

### FwbTable Slots

| Name    | Description                                                        |
| ------- | ------------------------------------------------------------------ |
| default | Table content — `FwbTableHead` and `FwbTableBody` elements.       |

### FwbTableHead Slots

| Name    | Description                              |
| ------- | ---------------------------------------- |
| default | One or more `FwbTableHeadCell` elements. |

### FwbTableHeadCell Slots

| Name    | Description          |
| ------- | -------------------- |
| default | Header cell content. |

### FwbTableBody Slots

| Name    | Description                         |
| ------- | ----------------------------------- |
| default | One or more `FwbTableRow` elements. |

### FwbTableRow Slots

| Name    | Description                          |
| ------- | ------------------------------------ |
| default | One or more `FwbTableCell` elements. |

### FwbTableCell Slots

| Name    | Description        |
| ------- | ------------------ |
| default | Data cell content. |
