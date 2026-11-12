import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { defineComponent, h, nextTick, ref } from 'vue'

import FwbTooltip from '../FwbTooltip.vue'

describe('FwbTooltip', () => {
  it('keeps the fwb-tooltip hook class', () => {
    const wrapper = mount(FwbTooltip)
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['fwb-tooltip', 'flex', 'items-start']))
  })

  it('merges a custom class over conflicting defaults', () => {
    const wrapper = mount(FwbTooltip, { attrs: { class: 'inline-flex items-center' } })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['fwb-tooltip', 'inline-flex', 'items-center']))
    expect(wrapper.classes()).not.toContain('flex')
    expect(wrapper.classes()).not.toContain('items-start')
  })

  it('does not put back a custom class that the merge dropped', () => {
    const wrapper = mount(FwbTooltip, { attrs: { class: 'items-start items-center' } })
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).not.toContain('items-start')
  })

  it('passes other attributes through to the root', () => {
    const wrapper = mount(FwbTooltip, { attrs: { 'id': 'tip', 'data-test': 'x' } })
    expect(wrapper.attributes('id')).toBe('tip')
    expect(wrapper.attributes('data-test')).toBe('x')
  })

  it('forwards attributes added after the first render', async () => {
    const extraAttrs = ref<Record<string, unknown>>({})
    const wrapper = mount(defineComponent(() => () => h(FwbTooltip, { ...extraAttrs.value })))
    const onClick = vi.fn()
    extraAttrs.value = { id: 'later', onClick }
    await nextTick()
    expect(wrapper.attributes('id')).toBe('later')
    await wrapper.trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
