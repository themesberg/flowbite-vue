import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbBreadcrumb from '../FwbBreadcrumb.vue'

describe('FwbBreadcrumb', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(FwbBreadcrumb, {
      slots: { default: '<li>Home</li><li>Page</li>' },
    })

    const nav = wrapper.find('nav')
    const ol = wrapper.find('ol')

    expect(nav.exists()).toBe(true)
    expect(ol.exists()).toBe(true)
    expect(nav.attributes('aria-label')).toBe('Breadcrumb')
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Page')
  })

  it('renders with solid style', () => {
    const wrapper = mount(FwbBreadcrumb, {
      props: { solid: true },
      slots: { default: '<li>Home</li>' },
    })

    const nav = wrapper.find('nav')
    const ol = wrapper.find('ol')

    // Check for solid-specific classes on nav wrapper
    expect(nav.classes()).toContain('bg-gray-50')
    expect(nav.classes()).toContain('py-3')
    expect(nav.classes()).toContain('px-5')
    expect(nav.classes()).toContain('rounded-lg')
    expect(nav.classes()).toContain('border')
    expect(nav.classes()).toContain('border-gray-200')
    expect(nav.classes()).toContain('dark:bg-gray-800')
    expect(nav.classes()).toContain('dark:border-gray-700')
    expect(nav.classes()).toContain('text-gray-700')

    // ol should still have basic classes
    expect(ol.classes()).toContain('inline-flex')
    expect(ol.classes()).toContain('items-center')
  })

  it('renders with default (non-solid) style', () => {
    const wrapper = mount(FwbBreadcrumb, {
      props: { solid: false },
      slots: { default: '<li>Home</li>' },
    })

    const nav = wrapper.find('nav')
    const ol = wrapper.find('ol')

    // Should not have solid-specific background classes
    expect(nav.classes()).not.toContain('bg-gray-50')
    expect(nav.classes()).not.toContain('border')

    // Should have default classes
    expect(ol.classes()).toContain('inline-flex')
    expect(ol.classes()).toContain('items-center')
    expect(ol.classes()).toContain('space-x-1')
    expect(ol.classes()).toContain('md:space-x-3')
  })

  it('passes slot content correctly', () => {
    const slotContent = `
      <li class="breadcrumb-item">Home</li>
      <li class="breadcrumb-item">Library</li>
      <li class="breadcrumb-item active">Data</li>
    `

    const wrapper = mount(FwbBreadcrumb, {
      slots: { default: slotContent },
    })

    expect(wrapper.find('.breadcrumb-item').exists()).toBe(true)
    expect(wrapper.findAll('.breadcrumb-item')).toHaveLength(3)
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Library')
    expect(wrapper.text()).toContain('Data')
  })

  it('has correct accessibility attributes', () => {
    const wrapper = mount(FwbBreadcrumb, {
      slots: { default: '<li>Test</li>' },
    })

    const nav = wrapper.find('nav')
    expect(nav.attributes('aria-label')).toBe('Breadcrumb')
  })

  it('applies base classes correctly', () => {
    const wrapper = mount(FwbBreadcrumb, {
      slots: { default: '<li>Test</li>' },
    })

    const ol = wrapper.find('ol')
    const classes = ol.classes()

    expect(classes).toContain('inline-flex')
    expect(classes).toContain('items-center')
    expect(classes).toContain('space-x-1')
    expect(classes).toContain('md:space-x-3')
  })
})
