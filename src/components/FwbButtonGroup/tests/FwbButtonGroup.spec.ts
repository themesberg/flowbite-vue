import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbButtonGroup from '../FwbButtonGroup.vue'

describe('FwbButtonGroup', () => {
  it('renders the default group classes', () => {
    const wrapper = mount(FwbButtonGroup)
    expect(wrapper.attributes('role')).toBe('group')
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['fwb-button-group', 'inline-flex', 'rounded-md', 'shadow-xs']))
  })

  it('merges a custom class over conflicting defaults', () => {
    const wrapper = mount(FwbButtonGroup, { attrs: { class: 'shadow-none flex' } })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['fwb-button-group', 'shadow-none', 'flex']))
    expect(wrapper.classes()).not.toContain('shadow-xs')
    expect(wrapper.classes()).not.toContain('inline-flex')
  })

  it('does not put back a custom class that the merge dropped', () => {
    const wrapper = mount(FwbButtonGroup, { attrs: { class: 'shadow-xs shadow-none' } })
    expect(wrapper.classes()).toContain('shadow-none')
    expect(wrapper.classes()).not.toContain('shadow-xs')
  })

  it('passes other attributes through to the root', () => {
    const wrapper = mount(FwbButtonGroup, { attrs: { 'id': 'group', 'aria-label': 'Actions' } })
    expect(wrapper.attributes('id')).toBe('group')
    expect(wrapper.attributes('aria-label')).toBe('Actions')
  })
})
