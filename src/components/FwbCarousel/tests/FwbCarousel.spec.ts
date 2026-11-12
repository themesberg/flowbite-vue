import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { defineComponent, h, nextTick, ref } from 'vue'

import FwbCarousel from '../FwbCarousel.vue'

const pictures = [{ src: '/1.jpg', alt: 'One' }, { src: '/2.jpg', alt: 'Two' }]

describe('FwbCarousel', () => {
  it('merges a custom class into the root', () => {
    const wrapper = mount(FwbCarousel, { props: { pictures }, attrs: { class: 'static w-96' } })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['static', 'w-96']))
    expect(wrapper.classes()).not.toContain('relative')
  })

  it('does not put back a custom class that the merge dropped', () => {
    const wrapper = mount(FwbCarousel, { props: { pictures }, attrs: { class: 'relative static' } })
    expect(wrapper.classes()).toContain('static')
    expect(wrapper.classes()).not.toContain('relative')
  })

  it('passes other attributes through to the root', () => {
    const wrapper = mount(FwbCarousel, { props: { pictures }, attrs: { 'id': 'gallery', 'aria-label': 'Gallery' } })
    expect(wrapper.attributes('id')).toBe('gallery')
    expect(wrapper.attributes('aria-label')).toBe('Gallery')
  })

  it('merges slidesClass over the default slide height', () => {
    const wrapper = mount(FwbCarousel, { props: { pictures, slidesClass: 'h-40 rounded-none' } })
    const slides = wrapper.findAll(':scope > div')[0]
    expect(slides.classes()).toEqual(expect.arrayContaining(['h-40', 'rounded-none', 'overflow-hidden', 'sm:h-64']))
    expect(slides.classes()).not.toContain('h-56')
    expect(slides.classes()).not.toContain('rounded-lg')
  })

  it('forwards attributes added after the first render', async () => {
    const extraAttrs = ref<Record<string, unknown>>({})
    const wrapper = mount(defineComponent(() => () => h(FwbCarousel, { pictures, ...extraAttrs.value })))
    const onClick = vi.fn()
    extraAttrs.value = { id: 'later', onClick }
    await nextTick()
    expect(wrapper.attributes('id')).toBe('later')
    await wrapper.trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
