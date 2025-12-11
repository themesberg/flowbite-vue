import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbCard from '../FwbCard.vue'

describe('FwbCard', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(FwbCard, {
      slots: { default: 'Card content' },
    })
    expect(wrapper.text()).toBe('Card content')
    expect(wrapper.element.tagName.toLowerCase()).toBe('div')
  })

  it('renders as anchor when href is provided', () => {
    const wrapper = mount(FwbCard, {
      props: { href: 'https://example.com' },
      slots: { default: 'Link card' },
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('a')
    expect(wrapper.attributes('href')).toBe('https://example.com')
  })

  it('renders image when imgSrc is provided', () => {
    const wrapper = mount(FwbCard, {
      props: {
        imgSrc: 'https://example.com/image.jpg',
        imgAlt: 'Test image',
      },
      slots: { default: 'Card with image' },
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('https://example.com/image.jpg')
    expect(img.attributes('alt')).toBe('Test image')
    expect(img.classes()).toContain('rounded-t-lg')
  })

  it('does not render image when imgSrc is not provided', () => {
    const wrapper = mount(FwbCard, {
      slots: { default: 'Card without image' },
    })

    expect(wrapper.find('img').exists()).toBe(false)
  })

  it('renders with different variants', () => {
    const variants = ['default', 'horizontal'] as const

    variants.forEach((variant) => {
      const wrapper = mount(FwbCard, {
        props: { variant },
        slots: { default: `${variant} card` },
      })

      const classes = wrapper.classes()

      // Check for base card classes
      expect(classes).toContain('bg-white')
      expect(classes).toContain('border')
      expect(classes).toContain('rounded-lg')
      expect(classes).toContain('shadow-md')
      expect(classes).toContain('dark:bg-gray-800')
      expect(classes).toContain('dark:border-gray-700')

      // Check for variant-specific classes
      if (variant === 'horizontal') {
        expect(classes).toContain('flex')
        expect(classes).toContain('flex-col')
        expect(classes).toContain('items-center')
        expect(classes).toContain('md:flex-row')
        expect(classes).toContain('md:min-w-xl')
      } else {
        // Default variant includes border-gray-200
        expect(classes).toContain('border-gray-200')
        expect(classes).toContain('block')
        expect(classes).toContain('min-w-sm')
      }
    })
  })

  it('applies horizontal image classes for horizontal variant', () => {
    const wrapper = mount(FwbCard, {
      props: {
        variant: 'horizontal',
        imgSrc: 'https://example.com/image.jpg',
        imgAlt: 'Horizontal image',
      },
      slots: { default: 'Horizontal card' },
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    const imgClasses = img.classes()
    expect(imgClasses).toContain('h-96')
    expect(imgClasses).toContain('md:h-auto')
    expect(imgClasses).toContain('w-full')
    expect(imgClasses).toContain('md:w-48')
    expect(imgClasses).toContain('md:rounded-none')
    expect(imgClasses).toContain('md:rounded-l-lg')
    expect(imgClasses).toContain('object-cover')
  })

  it('applies custom classes via class prop', () => {
    const wrapper = mount(FwbCard, {
      props: { class: 'custom-class' },
      slots: { default: 'Card with custom class' },
    })

    expect(wrapper.classes()).toContain('custom-class')
  })

  it('wraps slot content in a div', () => {
    const wrapper = mount(FwbCard, {
      slots: { default: '<p>Paragraph content</p>' },
    })

    const contentDiv = wrapper.find('div > div')
    expect(contentDiv.exists()).toBe(true)
    expect(contentDiv.text()).toContain('Paragraph content')
  })

  it('applies hover classes when href is provided', () => {
    const wrapper = mount(FwbCard, {
      props: { href: 'https://example.com' },
      slots: { default: 'Hoverable card' },
    })

    const classes = wrapper.classes()
    expect(classes).toContain('hover:bg-gray-100')
    expect(classes).toContain('dark:hover:bg-gray-700')
  })

  it('renders complex slot content correctly', () => {
    const wrapper = mount(FwbCard, {
      slots: {
        default: `
          <h5 class="text-2xl font-bold">Card Title</h5>
          <p class="text-gray-700">Card description</p>
          <button class="btn">Action</button>
        `,
      },
    })

    expect(wrapper.text()).toContain('Card Title')
    expect(wrapper.text()).toContain('Card description')
    expect(wrapper.text()).toContain('Action')
    expect(wrapper.find('.text-2xl').exists()).toBe(true)
    expect(wrapper.find('.btn').exists()).toBe(true)
  })

  it('handles empty imgAlt gracefully', () => {
    const wrapper = mount(FwbCard, {
      props: {
        imgSrc: 'https://example.com/image.jpg',
      },
      slots: { default: 'Card' },
    })

    const img = wrapper.find('img')
    expect(img.attributes('alt')).toBe('')
  })
})
