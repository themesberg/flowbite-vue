<script setup>
import TableExample from './table/examples/TableExample.vue';
import TableStripedExample from './table/examples/TableStripedExample.vue';
import TableStripedColumnsExample from './table/examples/TableStripedColumnsExample.vue';
import TableHoverableExample from './table/examples/TableHoverableExample.vue';
</script>
# Vue Table Component - Flowbite

#### Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line

---

:::tip
Original reference: [https://flowbite.com/docs/components/tables/](https://flowbite.com/docs/components/tables/)
:::

## Basic example

<TableExample />

```vue
<template>
  <Table>
    <table-head>
      <table-head-cell>Product name</table-head-cell>
      <table-head-cell>Color</table-head-cell>
      <table-head-cell>Category</table-head-cell>
      <table-head-cell>Price</table-head-cell>
      <table-head-cell><span class="sr-only">Edit</span></table-head-cell>
    </table-head>
    <table-body>
      <table-row>
        <table-cell>Apple MacBook Pro 17"</table-cell>
        <table-cell>Sliver</table-cell>
        <table-cell>Laptop</table-cell>
        <table-cell>$2999</table-cell>
        <table-cell>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </table-cell>
      </table-row>
      <table-row>
        <table-cell>Microsoft Surface Pro</table-cell>
        <table-cell>White</table-cell>
        <table-cell>Laptop PC</table-cell>
        <table-cell>$1999</table-cell>
        <table-cell>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </table-cell>
      </table-row>
      <table-row>
        <table-cell>Magic Mouse 2</table-cell>
        <table-cell>Black</table-cell>
        <table-cell>Accessories</table-cell>
        <table-cell>$99</table-cell>
        <table-cell>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </table-cell>
      </table-row>
    </table-body>
  </Table>
</template>
<script setup>
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from 'flowbite-vue'
</script>

```

## Striped example

<TableStripedExample />

```vue
<template>
  <Table striped>
    <table-head>
      <table-head-cell>Product name</table-head-cell>
      <table-head-cell>Color</table-head-cell>
      <table-head-cell>Category</table-head-cell>
      <table-head-cell>Price</table-head-cell>
      <table-head-cell><span class="sr-only">Edit</span></table-head-cell>
    </table-head>
    <table-body>
      <table-row>
        <table-cell>Apple MacBook Pro 17"</table-cell>
        <table-cell>Sliver</table-cell>
        <table-cell>Laptop</table-cell>
        <table-cell>$2999</table-cell>
        <table-cell>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </table-cell>
      </table-row>
      <table-row>
        <table-cell>Microsoft Surface Pro</table-cell>
        <table-cell>White</table-cell>
        <table-cell>Laptop PC</table-cell>
        <table-cell>$1999</table-cell>
        <table-cell>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </table-cell>
      </table-row>
      <table-row>
        <table-cell>Magic Mouse 2</table-cell>
        <table-cell>Black</table-cell>
        <table-cell>Accessories</table-cell>
        <table-cell>$99</table-cell>
        <table-cell>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </table-cell>
      </table-row>
    </table-body>
  </Table>
</template>
<script setup>
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from 'flowbite-vue'
</script>

```

## Striped columns example

<TableStripedColumnsExample />

```vue
<template>
  <Table striped-columns>
    <table-head>
      <table-head-cell>Product name</table-head-cell>
      <table-head-cell>Color</table-head-cell>
      <table-head-cell>Category</table-head-cell>
      <table-head-cell>Price</table-head-cell>
      <table-head-cell><span class="sr-only">Edit</span></table-head-cell>
    </table-head>
    <table-body>
      <table-row>
        <table-cell>Apple MacBook Pro 17"</table-cell>
        <table-cell>Sliver</table-cell>
        <table-cell>Laptop</table-cell>
        <table-cell>$2999</table-cell>
        <table-cell>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </table-cell>
      </table-row>
      <table-row>
        <table-cell>Microsoft Surface Pro</table-cell>
        <table-cell>White</table-cell>
        <table-cell>Laptop PC</table-cell>
        <table-cell>$1999</table-cell>
        <table-cell>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </table-cell>
      </table-row>
      <table-row>
        <table-cell>Magic Mouse 2</table-cell>
        <table-cell>Black</table-cell>
        <table-cell>Accessories</table-cell>
        <table-cell>$99</table-cell>
        <table-cell>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </table-cell>
      </table-row>
    </table-body>
  </Table>
</template>
<script setup>
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from 'flowbite-vue'
</script>

```

## Hoverable example

<TableHoverableExample />

```vue
<template>
  <Table hoverable>
    <table-head>
      <table-head-cell>Product name</table-head-cell>
      <table-head-cell>Color</table-head-cell>
      <table-head-cell>Category</table-head-cell>
      <table-head-cell>Price</table-head-cell>
      <table-head-cell><span class="sr-only">Edit</span></table-head-cell>
    </table-head>
    <table-body>
      <table-row>
        <table-cell>Apple MacBook Pro 17"</table-cell>
        <table-cell>Sliver</table-cell>
        <table-cell>Laptop</table-cell>
        <table-cell>$2999</table-cell>
        <table-cell>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </table-cell>
      </table-row>
      <table-row>
        <table-cell>Microsoft Surface Pro</table-cell>
        <table-cell>White</table-cell>
        <table-cell>Laptop PC</table-cell>
        <table-cell>$1999</table-cell>
        <table-cell>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </table-cell>
      </table-row>
      <table-row>
        <table-cell>Magic Mouse 2</table-cell>
        <table-cell>Black</table-cell>
        <table-cell>Accessories</table-cell>
        <table-cell>$99</table-cell>
        <table-cell>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </table-cell>
      </table-row>
    </table-body>
  </Table>
</template>
<script setup>
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from 'flowbite-vue'
</script>

```
