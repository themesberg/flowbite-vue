import { computed, type Ref } from 'vue'

import type { ModalPosition, ModalSize } from '../types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const defaultOverlayClasses = 'z-40 fixed inset-0 bg-gray-900/50 dark:bg-gray-900/80'
const defaultLayoutClasses = 'relative w-full'
const defaultWrapperClasses = 'relative bg-white dark:bg-gray-700 shadow-sm m-4 rounded-lg'

const defaultHeaderClasses = 'flex justify-between items-center p-4 rounded-t'
const defaultBodyClasses = 'p-6'
const defaultFooterClasses = 'p-6 border-gray-200 dark:border-gray-600 border-t rounded-b'

const modalSizeClasses: Record<ModalSize, string> = {
  'xs': 'max-w-xs',
  'sm': 'max-w-sm',
  'md': 'max-w-md',
  'lg': 'max-w-lg',
  'xl': 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
}

const modalPositionClasses: Record<ModalPosition, string> = {
  'top-start': 'self-start justify-self-start',
  'top-center': 'self-start justify-self-center',
  'top-end': 'self-start justify-self-end',
  'center-start': 'self-center justify-self-start',
  'center': 'self-center justify-self-center',
  'center-end': 'self-center justify-self-end',
  'bottom-start': 'self-end justify-self-start',
  'bottom-center': 'self-end justify-self-center',
  'bottom-end': 'self-end justify-self-end',
}

export type UseModalClassesProps = {
  bodyClass: Ref<string | Record<string, boolean>>
  layoutClass: Ref<string | Record<string, boolean>>
  footerClass: Ref<string | Record<string, boolean>>
  headerClass: Ref<string | Record<string, boolean>>
  isHeaderSlotProvided: Ref<boolean>
  overlayClass: Ref<string | Record<string, boolean>>
  position: Ref<ModalPosition>
  size: Ref<ModalSize>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useModalClasses (props: UseModalClassesProps): {
  bodyClass: Ref<string>
  footerClass: Ref<string>
  headerClass: Ref<string>
  layoutClass: Ref<string>
  overlayClass: Ref<string>
  wrapperClass: Ref<string>
} {
  const layoutClass = computed(() => useMergeClasses([
    defaultLayoutClasses,
    modalSizeClasses[props.size.value],
    modalPositionClasses[props.position.value],
    props.layoutClass.value,
  ]))

  const wrapperClass = computed(() => useMergeClasses([
    defaultWrapperClasses,
    props.wrapperClass.value,
  ]))

  const overlayClass = computed(() => useMergeClasses([
    defaultOverlayClasses,
    props.overlayClass.value,
  ]))

  const headerClass = computed(() => useMergeClasses([
    defaultHeaderClasses,
    props.isHeaderSlotProvided.value ? 'border-b border-gray-200 dark:border-gray-600' : '',
    props.headerClass.value,
  ]))

  const bodyClass = computed(() => useMergeClasses([
    defaultBodyClasses,
    props.isHeaderSlotProvided.value ? '' : 'pt-0',
    props.bodyClass.value,
  ]))

  const footerClass = computed(() => useMergeClasses([
    defaultFooterClasses,
    props.footerClass.value,
  ]))

  return {
    bodyClass,
    footerClass,
    headerClass,
    layoutClass,
    overlayClass,
    wrapperClass,
  }
}
