<script lang="ts">
import { defineComponent, type PropType, type VNode } from 'vue'

import type { SlotListenerTrigger, TriggerEventHandlers } from './types'

import { getFirstSlotVNode } from '@/utils/getFirstSlotNode'

// inspired from https://github.com/TuSimple/naive-ui/blob/main/src/popover/src/Popover.tsx

const triggerEventMap: Record<SlotListenerTrigger, string[]> = {
  focus: ['onFocus', 'onBlur'],
  click: ['onClick'],
  hover: ['onMouseenter', 'onMouseleave'],
}

const triggerEventNames = Object.values(triggerEventMap).flat() as (keyof TriggerEventHandlers)[]

// Adds the listener's handlers to the trigger vnode, after any handlers the
// trigger already has, so both run once per event.
function appendEvents (
  vNode: VNode,
  events: TriggerEventHandlers,
): void {
  const props: Record<string, unknown> = { ...vNode.props }
  triggerEventNames.forEach((eventName) => {
    const originalHandler = props[eventName] as ((...args: unknown[]) => void) | undefined
    const handler = events[eventName] as (...args: unknown[]) => void
    props[eventName] = originalHandler
      ? (...args: unknown[]) => {
          originalHandler(...args)
          handler(...args)
        }
      : handler
  })
  vNode.props = props
}

export default defineComponent({
  name: 'SlotListener',
  props: {
    trigger: {
      type: String as PropType<SlotListenerTrigger>,
      default: 'click',
    },
  },
  emits: ['click', 'focus', 'blur', 'mouseenter', 'mouseleave'],
  setup (_props, { emit, slots }) {
    const handlers: TriggerEventHandlers = {
      onClick: e => emit('click', e),
      onMouseenter: e => emit('mouseenter', e),
      onMouseleave: e => emit('mouseleave', e),
      onFocus: e => emit('focus', e),
      onBlur: e => emit('blur', e),
    }

    return () => {
      const triggerVNode = getFirstSlotVNode(slots, 'default')
      if (triggerVNode) appendEvents(triggerVNode, handlers)
      return triggerVNode
    }
  },
})
</script>
