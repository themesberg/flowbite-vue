<template>
  <fwb-datepicker
    v-model="model"
    autohide
    format="DD dd MM yyyy"
    clear-btn
    today-btn
    :today-btn-mode="1"
    title="Example datepicker"
    :week-start="1"
  >
    <template #calendar-icon>
      <calendar-icon />
    </template>
  </fwb-datepicker>
</template>

<script setup lang="ts">
import { FwbDatepicker } from '../../../../src/index'
import CalendarIcon from '../assets/CalendarIcon.vue'

const model = defineModel<string | Date | null>({ default: new Date() })
</script>
