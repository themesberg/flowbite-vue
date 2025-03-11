import { computed, type Ref } from 'vue'

import { useFlowbiteThemable } from './useFlowbiteThemable'

import type { FlowbiteTheme, ThemableChildrenApply } from '../types'

type UseFlowbiteThemableChildReturns = {
  classes: Ref<string>
}

type UseFlowbiteThemableChildProps = {
  apply: Ref<ThemableChildrenApply[]>
  theme?: Ref<FlowbiteTheme | undefined>
}

export function useFlowbiteThemableChildClasses (props: UseFlowbiteThemableChildProps): UseFlowbiteThemableChildReturns {
  const {
    backgroundClasses,
    borderClasses,
    disabledClasses,
    focusClasses,
    hoverClasses,
    isActive,
    textClasses,
  } = useFlowbiteThemable(props.theme?.value)

  const classes = computed(() => {
    if (!isActive.value) {
      return ''
    }

    const _classes = []
    if (props.apply.value.includes('text')) {
      _classes.push(textClasses.value)
    }

    if (props.apply.value.includes('border')) {
      _classes.push(borderClasses.value)
    }

    if (props.apply.value.includes('background')) {
      _classes.push(backgroundClasses.value)
    }

    if (props.apply.value.includes('hover')) {
      _classes.push(hoverClasses.value)
    }

    if (props.apply.value.includes('disabled')) {
      _classes.push(disabledClasses.value)
    }

    if (props.apply.value.includes('focus')) {
      _classes.push(focusClasses.value)
    }

    return _classes.join(' ')
  })

  return {
    classes,
  }
}
