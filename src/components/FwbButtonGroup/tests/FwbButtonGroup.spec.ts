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
})
