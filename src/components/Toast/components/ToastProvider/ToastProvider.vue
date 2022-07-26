<script lang="ts">
import { defineComponent, h, provide, ref, resolveComponent, TransitionGroup } from 'vue'
import { FLOWBITE_TOAST_INJECTION_KEY } from '@/components/Toast/components/ToastProvider/injection/config'
import type { ToastItem, ToastItemWithId } from '@/components/Toast/components/ToastProvider/types'
import { Toast } from '@/index'
import { useTimeoutFn } from '@vueuse/core'

export default defineComponent({
  components: {
    Toast: Toast as any,
  },
  setup() {
    const toasts = ref<ToastItemWithId[]>([])

    const runRemoveTimeout = (id: string, ms: number) => {
      useTimeoutFn(() => removeToast(id), ms)
    }

    const addToast = (toast: ToastItem) => {
      const id = ((new Date()).getTime() * Math.random()).toString()
      toasts.value.push({
        id,
        ...toast,
      })
      if(toast.time > 0)
        runRemoveTimeout(id, toast.time)
    }

    const removeToast = (id: string) => {
      const index = toasts.value.findIndex(_ => _.id === id)
      toasts.value.splice(index, 1)
    }

    const popToast = () => {
      if(toasts.value.length === 0) return
      toasts.value.pop()
    }

    provide(FLOWBITE_TOAST_INJECTION_KEY, {
      add: addToast,
      remove: removeToast,
      pop: popToast,
    })

    return {
      toasts,
      removeToast,
    }
  },
  render() {
    const {
      $slots,
      toasts,
      removeToast,
    } = this

    return h('div', {}, [
      $slots.default ? $slots.default() : null, // rendering default slot
      h(TransitionGroup, {
            name: 'list',
            tag: 'div',
            class: 'xl:w-1/6 md:w-1/4 sm:w-1/4 fixed top-3 right-3 flex flex-col gap-2 z-50',
          },
          {
            default: () => toasts.map(_toast => // rendering every toast
                h(Toast as any, {
                  closable: true,
                  type: _toast.type,
                  key: _toast.id,
                  onClose: () => removeToast(_toast.id),
                }, () => _toast.text),
            ),
          },
      ),
    ])
  },
})


</script>
<style lang="scss" scoped src="./ToastProvider.css"></style>
