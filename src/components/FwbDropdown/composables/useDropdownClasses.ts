import { computed, nextTick, type Ref, ref, watch } from 'vue'

import type { DropdownProps } from '../FwbDropdown.vue'
import type { DropdownAlignment, DropdownPlacement } from '../types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const defaultWrapperClasses = 'fwb-dropdown inline-flex relative'
const defaultContentWrapperClasses = 'absolute z-10 bg-white rounded shadow dark:bg-gray-700'
const defaultGapInPx = 8

const contentWrapperAlignmentClasses: Record<DropdownAlignment, string> = {
  horizontal: 'left-0',
  vertical: 'top-0',
  horizontal_reverse: 'right-0',
  vertical_reverse: 'bottom-0',
}

const suffixRotationClassMap = {
  bottom: '',
  left: 'rotate-90',
  right: '-rotate-90',
  top: 'rotate-180',
}

interface UseDropdownClassesProps {
  contentWrapper: Ref<HTMLDivElement | undefined>
  isContentVisible: Ref<boolean>
  props: DropdownProps
}

const placementCalculator: Record<DropdownPlacement, (rect: DOMRect) => string> = {
  bottom: (rect: DOMRect): string => `bottom: -${rect.height + defaultGapInPx}px;`,
  left: (rect: DOMRect): string => `left: -${rect.width + defaultGapInPx}px;`,
  right: (rect: DOMRect): string => `right: -${rect.width + defaultGapInPx}px;`,
  top: (rect: DOMRect): string => `top: -${rect.height + defaultGapInPx}px;`,
}

export function useDropdownClasses ({ contentWrapper, isContentVisible, props }: UseDropdownClassesProps) {
  const isAlignedToEnd = props.alignToEnd
  const placement = props.placement as DropdownPlacement
  const userContentWrapperClasses = props.contentWrapperClass ?? ''
  const userTriggerWrapperClasses = props.triggerWrapperClass ?? ''
  const userWrapperClasses = props.class ?? ''

  const wrapperClasses = computed(() => {
    let dynamicClasses = ''

    if (isContentVisible.value) {
      dynamicClasses += ' fwb-dropdown-active'
    }

    return useMergeClasses([defaultWrapperClasses, dynamicClasses, userWrapperClasses])
  })

  const contentWrapperClasses = computed(() => {
    let contentWrapperAlignment: DropdownAlignment = ['top', 'bottom'].includes(placement) ? 'horizontal' : 'vertical'
    if (isAlignedToEnd) {
      contentWrapperAlignment = `${contentWrapperAlignment}_reverse`
    }

    return useMergeClasses([
      defaultContentWrapperClasses,
      contentWrapperAlignmentClasses[contentWrapperAlignment],
      userContentWrapperClasses,
    ])
  })

  const triggerWrapperClasses = computed(() => {
    return useMergeClasses([userTriggerWrapperClasses])
  })
  const triggerClasses = ''

  const triggerSuffixClass = computed(() =>
    useMergeClasses([
      suffixRotationClassMap[placement],
      placement === 'left' ? 'mr-2' : '',
    ]),
  )

  const contentStyles = ref('')

  const calculatePlacementClasses = () => {
    const boundingRect = contentWrapper.value?.getBoundingClientRect()

    contentStyles.value = boundingRect ? placementCalculator[placement](boundingRect) : ''
  }

  // Watch for changes in the content element, and recalculate placement classes
  // to ensure the dropdown is always positioned correctly
  const observer = new MutationObserver(() => {
    calculatePlacementClasses()
  })

  watch(isContentVisible, (value: boolean) => {
    if (value) nextTick(() => calculatePlacementClasses())
  })

  watch(
    contentWrapper,
    (element) => {
      if (element) {
        observer.observe(element, {
          childList: true,
          subtree: true,
        })
      } else {
        observer.disconnect()
      }
    },
  )

  return {
    contentStyles,
    contentWrapperClasses,
    triggerClasses,
    triggerSuffixClass,
    triggerWrapperClasses,
    wrapperClasses,
  }
}
