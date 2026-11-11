import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbCarousel from '../FwbCarousel.vue'

const pictures = [{ src: '/1.jpg', alt: 'One' }, { src: '/2.jpg', alt: 'Two' }]

describe('FwbCarousel', () => {
  it('merges a custom class into the root', () => {
    const wrapper = mount(FwbCarousel, { props: { pictures }, attrs: { class: 'static w-96' } })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['static', 'w-96']))
    expect(wrapper.classes()).not.toContain('relative')
  })

  it('merges slidesClass over the default slide height', () => {
    const wrapper = mount(FwbCarousel, { props: { pictures, slidesClass: 'h-40 rounded-none' } })
    const slides = wrapper.findAll(':scope > div')[0]
    expect(slides.classes()).toEqual(expect.arrayContaining(['h-40', 'rounded-none', 'overflow-hidden', 'sm:h-64']))
    expect(slides.classes()).not.toContain('h-56')
    expect(slides.classes()).not.toContain('rounded-lg')
  })
})
