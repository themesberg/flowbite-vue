import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { h } from 'vue'

import FwbDropdown from '../FwbDropdown.vue'

const mountDropdown = (onTriggerClick = vi.fn(), onItemClick = vi.fn()) => mount(FwbDropdown, {
  slots: {
    trigger: () => h('button', { class: 'trigger', onClick: onTriggerClick }, 'Open'),
    default: () => h('div', { class: 'item', onClick: onItemClick }, 'Item'),
  },
})

describe('FwbDropdown', () => {
  it('opens when the trigger is clicked and calls the trigger\'s own click handler once', async () => {
    const onTriggerClick = vi.fn()
    const wrapper = mountDropdown(onTriggerClick)

    await wrapper.find('.trigger').trigger('click')

    expect(wrapper.find('.item').exists()).toBe(true)
    expect(onTriggerClick).toHaveBeenCalledTimes(1)
  })

  it('calls a content element\'s own click handler once', async () => {
    const onItemClick = vi.fn()
    const wrapper = mountDropdown(vi.fn(), onItemClick)
    await wrapper.find('.trigger').trigger('click')

    await wrapper.find('.item').trigger('click')

    expect(onItemClick).toHaveBeenCalledTimes(1)
  })
})
