<script lang="ts">
import { useTimeoutFn } from '@vueuse/core'
import { defineComponent, h, type PropType, provide, ref, TransitionGroup } from 'vue'

import FwbToast from './FwbToast.vue'
import { FLOWBITE_TOAST_INJECTION_KEY } from './injection/config'

import type {
  ToastItem,
  ToastItemWithId,
  ToastTransition,
  UseToastInjection,
} from './types'

export default defineComponent({
  components: {
    FwbToast,
  },
  props: {
    transition: {
      type: String as PropType<ToastTransition>,
      default: 'slide-left',
    },
  },
  setup () {
    const toasts = ref<ToastItemWithId[]>([])

    const runRemoveTimeout = (id: string, ms: number) => {
      useTimeoutFn(() => removeToast(id), ms)
    }

    const addToast = (toast: ToastItem) => {
      const id = parseInt((new Date().getTime() * Math.random()).toString()).toString()
      toasts.value.push({
        id,
        ...toast,
      })
      if (toast.time > 0) {
        runRemoveTimeout(id, toast.time)
      }

      return id
    }

    const popToast = () => {
      if (toasts.value.length === 0) {
        return ''
      }

      const lastId = toasts.value[toasts.value.length - 1].id
      toasts.value.pop()

      return lastId
    }

    const removeToast = (id: string) => {
      const index = toasts.value.findIndex(toast => toast.id === id)
      if (index >= 0) {
        toasts.value.splice(index, 1)
      }

      return index >= 0
    }

    provide<UseToastInjection>(FLOWBITE_TOAST_INJECTION_KEY, {
      add: addToast,
      pop: popToast,
      remove: removeToast,
    })

    return {
      toasts,
      removeToast,
    }
  },
  render () {
    const { $props, $slots, toasts, removeToast } = this

    return h('div', {}, [
      $slots.default ? $slots.default() : null, // rendering default slot
      h(
        TransitionGroup,
        {
          name: $props.transition,
          tag: 'div',
          class: 'xl:w-1/6 md:w-1/4 sm:w-1/4 fixed top-3 right-3 flex flex-col gap-2 z-50',
        },
        {
          default: () =>
            toasts.map(
              (
                _toast, // rendering every toast
              ) =>
                _toast.component
                  ? h(
                    _toast.component,
                    {
                      key: _toast.id,
                      onClose: () => removeToast(_toast.id),
                      ...(_toast.componentProps ? _toast.componentProps : {}),
                    },
                    () => _toast.text,
                  )
                  : h(
                    FwbToast,
                    {
                      closable: true,
                      type: _toast.type,
                      key: _toast.id,
                      onClose: () => removeToast(_toast.id),
                    },
                    () => _toast.text,
                  ),
            ),
        },
      ),
    ])
  },
})
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-top-enter-active,
.slide-top-leave-active {
  transition: all 0.5s ease;
}
.slide-top-enter-from,
.slide-top-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: all 0.5s ease;
}
.slide-bottom-enter-from,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
