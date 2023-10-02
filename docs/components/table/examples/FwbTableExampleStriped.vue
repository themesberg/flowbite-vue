<template>
  <div class="vp-raw">
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
  </div>
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
} from '../../../../src/index'
</script>
