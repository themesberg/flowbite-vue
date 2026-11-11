import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbCard from '../FwbCard.vue'

describe('FwbCard', () => {
  it('renders the default background', () => {
    const wrapper = mount(FwbCard)
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['bg-white', 'dark:bg-gray-800']))
  })

  it('merges a custom class over conflicting defaults', () => {
    const wrapper = mount(FwbCard, { props: { class: 'shadow-none rounded-none' } })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['shadow-none', 'rounded-none']))
    expect(wrapper.classes()).not.toContain('shadow-md')
    expect(wrapper.classes()).not.toContain('rounded-lg')
  })

  it('accepts object and array class input', () => {
    const wrapper = mount(FwbCard, { props: { class: ['p-4', { 'shadow-none': true, 'm-2': false }] } })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['p-4', 'shadow-none']))
    expect(wrapper.classes()).not.toContain('m-2')
    expect(wrapper.classes()).not.toContain('shadow-md')
  })

  it('drops both default backgrounds when a custom background is set', () => {
    const wrapper = mount(FwbCard, { props: { class: 'bg-red-500', href: '#' } })
    expect(wrapper.classes()).toContain('bg-red-500')
    expect(wrapper.classes()).not.toContain('bg-white')
    expect(wrapper.classes()).not.toContain('dark:bg-gray-800')
    expect(wrapper.classes()).not.toContain('hover:bg-gray-100')
  })

  it('keeps the link hover alongside an unrelated custom class', () => {
    const wrapper = mount(FwbCard, { props: { class: 'min-w-md', href: '#' } })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['min-w-md', 'hover:bg-gray-100']))
    expect(wrapper.classes()).not.toContain('min-w-sm')
  })

  it('merges imgClass into the image classes', () => {
    const wrapper = mount(FwbCard, { props: { imgSrc: '/a.jpg', imgClass: 'rounded-none w-full' } })
    const img = wrapper.find('img')
    expect(img.classes()).toEqual(expect.arrayContaining(['rounded-none', 'w-full']))
    expect(img.classes()).not.toContain('rounded-t-lg')
  })

  it('merges imgClass over the horizontal image classes', () => {
    const wrapper = mount(FwbCard, { props: { imgSrc: '/a.jpg', variant: 'horizontal', imgClass: 'h-48' } })
    const img = wrapper.find('img')
    expect(img.classes()).toEqual(expect.arrayContaining(['h-48', 'object-cover', 'md:w-48']))
    expect(img.classes()).not.toContain('h-96')
  })
})
