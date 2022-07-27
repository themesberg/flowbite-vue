import type { ToastType } from '@/components/Toast/types'
import type { DefineComponent } from 'vue'

export type ToastItem = {
    time: number // ms
    type: ToastType
    text: string
    component?: DefineComponent
    componentProps?: Record<string, unknown>
}

export type ToastItemWithId = ToastItem & {
    id: string
}

export type ToastInjection = {
}
