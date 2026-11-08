import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { h } from 'vue'

import FwbSlotListener from '../FwbSlotListener.vue'

const mountWithTrigger = (ownHandlers: Record<string, () => void> = {}) => mount(FwbSlotListener, {
  slots: { default: () => h('button', ownHandlers, 'Trigger') },
})

describe('FwbSlotListener', () => {
  describe.each([
    ['click', 'onClick'],
    ['mouseenter', 'onMouseenter'],
    ['mouseleave', 'onMouseleave'],
    ['focus', 'onFocus'],
    ['blur', 'onBlur'],
  ])('%s on the trigger', (event, handlerName) => {
    it(`emits ${event} once`, async () => {
      const wrapper = mountWithTrigger()
      await wrapper.find('button').trigger(event)
      expect(wrapper.emitted(event)).toHaveLength(1)
    })

    it(`calls the trigger's own ${handlerName} once`, async () => {
      const ownHandler = vi.fn()
      const wrapper = mountWithTrigger({ [handlerName]: ownHandler })
      await wrapper.find('button').trigger(event)
      expect(ownHandler).toHaveBeenCalledTimes(1)
      expect(wrapper.emitted(event)).toHaveLength(1)
    })
  })
})
