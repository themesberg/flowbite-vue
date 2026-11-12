import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

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
})
