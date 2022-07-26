import type { ToastType } from '@/components/Toast/types'

export type ToastItem = {
    time: number // ms
    type: ToastType
    text: string
}

export type ToastItemWithId = ToastItem & {
    id: string
}

export type ToastInjection = {
}
