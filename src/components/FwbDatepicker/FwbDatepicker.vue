<template>
  <div class="relative max-w-sm">
    <div class="absolute inset-y-0 pe-3.5 end-0 flex items-center pointer-events-none">
      <slot name="calendar-icon">
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
          />
        </svg>
      </slot>
    </div>
    <input
      ref="datepickerRef"
      type="text"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Select date"
      @changeDate="(target: any) => (model = target.detail.date)"
    >
  </div>
</template>

<script lang="ts" setup>
import Datepicker from 'flowbite-datepicker/Datepicker'
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'
import type { DateInput } from '@/components/FwbDatepicker/types'

interface FwbDatePickerProps {
  autohide?: boolean
  beforeShowDay?(date: Date): { enabled: boolean; classes: string; content: string } | string | boolean | null
  beforeShowDecade?(date: Date): { enabled: boolean; classes: string; content: string } | string | boolean | null
  beforeShowMonth?(date: Date): { enabled: boolean; classes: string; content: string } | string | boolean | null
  beforeShowYear?(date: Date): { enabled: boolean; classes: string; content: string } | string | boolean | null
  buttonClass?: string
  calendarWeeks?: boolean
  clearBtn?: boolean
  container?: string
  dateDelimiter?: string
  dateDisabled?: DateInput[]
  daysOfWeekDisabled?: number[]
  daysOfWeekHighlighted?: number[]
  defaultViewDate?: DateInput
  disableTouchKeyboard?: boolean
  format?:
    | string
    | {
        format: {
          toValue(date: DateInput, format: object, locale: object): Date
          toDisplay(date: Date, format: object, locale: object): string
        }
      }
  language?: string
  maxDate?: DateInput | null
  maxNumberOfDates?: number
  maxView?: number
  minDate?: DateInput | null
  nextArrow?: string
  orientation?: string
  pickLevel?: number
  prevArrow?: string
  showDaysOfWeek?: boolean
  showOnClick?: boolean
  showOnFocus?: boolean
  startView?: number
  title?: string
  todayBtn?: boolean
  todayBtnMode?: number
  todayHighlight?: boolean
  updateOnBlur?: boolean
  weekStart?: number
}

const props = withDefaults(defineProps<FwbDatePickerProps>(), {
  autohide: false,
  beforeShowDay: () => null,
  beforeShowDecade: () => null,
  beforeShowMonth: () => null,
  beforeShowYear: () => null,
  buttonClass: 'button',
  calendarWeeks: false,
  clearBtn: false,
  container: 'body',
  dateDelimiter: ',',
  dateDisabled: () => [],
  daysOfWeekDisabled: () => [],
  daysOfWeekHighlighted: () => [],
  defaultViewDate: Date.now(),
  disableTouchKeyboard: false,
  format: 'mm/dd/yyyy',
  language: 'en',
  maxDate: null,
  maxNumberOfDates: 1,
  maxView: 3,
  minDate: null,
  nextArrow: undefined,
  orientation: 'auto',
  pickLevel: 0,
  prevArrow: undefined,
  showDaysOfWeek: true,
  showOnClick: true,
  showOnFocus: true,
  startView: 0,
  title: '',
  todayBtn: false,
  // 0 - focus, 1 - select
  todayBtnMode: 0,
  todayHighlight: false,
  updateOnBlur: true,
  weekStart: 0,
})

const datepickerRef = ref<Datepicker | null>(null)
let datepickerInstance: Datepicker | null = null

const refreshDatepicker = () => {
  if (!model.value) {
    datepickerInstance.setDate([], {
      clear: true,
    })
  } else {
    datepickerInstance.setDate([new Date(model.value)], {
      clear: true,
    })
  }
}

onMounted(() => {
  datepickerInstance = new Datepicker(datepickerRef.value, { ...props })
  refreshDatepicker()
})

onUpdated(() => {
  refreshDatepicker()
})

onUnmounted(() => {
  if (datepickerInstance) {
    datepickerInstance.destroy()
  }
})
const model = defineModel<DateInput | null>()
</script>
