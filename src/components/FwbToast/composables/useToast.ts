import { ref, type Ref, type ShallowRef } from 'vue'
import { type ToastAlign, type ToastType } from '@/components/FwbToast/types'
import { nanoid } from 'nanoid'
import { useTimeoutFn } from '@vueuse/core'

interface ToastItem {
    id?: string
    text: string,
    time: number,
    component?: ShallowRef
    componentAttrs: {
        type: ToastType,
        alignment: ToastAlign,
        closable: boolean,
        divide: boolean,
    }
}
const toasts:Ref<ToastItem[]> = ref([])
export function useToast () {
  function addToast (item: ToastItem) {
    const toastId = nanoid()
    toasts.value.push({
      ...item,
      id: toastId,
    })
    if (item.time && item.time > 0) {
      useTimeoutFn(() => removeToast(toastId), item.time)
    }
  }
  function removeToast (id?: string) {
    if (!id) return
    toasts.value = toasts.value.filter(el => el.id !== id)
  }

  return {
    addToast,
    removeToast,
    toasts,
  }
}
