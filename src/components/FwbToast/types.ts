import type { ShallowRef } from 'vue'

export type ToastAlign = 'start' | 'center' | 'end'
export type ToastType = 'success' | 'warning' | 'danger' | 'info'
export type ToastColor = 'primary' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'orange' | 'none'

export type ToastItem = {
  id?: string
  text: string,
  time: number,
  component?: ShallowRef
  componentAttrs: {
    type: ToastColor,
    alignment: ToastAlign,
    closable: boolean,
    divide: boolean,
  }
}

export type ToastTransition = 'slide-left' | 'slide-right' | 'fade' | 'slide-top' | 'slide-bottom'
