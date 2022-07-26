import type { Ref } from 'vue'
import { computed } from 'vue'
import type {
    ThemableChildrenApply,
} from '../types'
import { useFlowbiteThemable } from '../../../composables/useFlowbiteThemable'
import type { FlowbiteTheme } from '@/components/utils/FlowbiteThemable/types'

type UseFlowbiteThemableChildReturns = {
    classes: Ref<string>
}

type UseFlowbiteThemableChildProps = {
    apply: Ref<ThemableChildrenApply[]>
    theme?: Ref<FlowbiteTheme | undefined>
}

export function useFlowbiteThemableChildClasses(props: UseFlowbiteThemableChildProps): UseFlowbiteThemableChildReturns {

    const { textClasses, borderClasses, backgroundClasses, hoverClasses, disabledClasses, focusClasses, isActive } = useFlowbiteThemable(props.theme?.value)

    const classes = computed(() => {
        if(!isActive.value) return ''
        const _classes = []
        if(props.apply.value.includes('text')) _classes.push(textClasses.value)
        if(props.apply.value.includes('border')) _classes.push(borderClasses.value)
        if(props.apply.value.includes('background')) _classes.push(backgroundClasses.value)
        if(props.apply.value.includes('hover')) _classes.push(hoverClasses.value)
        if(props.apply.value.includes('disabled')) _classes.push(disabledClasses.value)
        if(props.apply.value.includes('focus')) _classes.push(focusClasses.value)
        return _classes.join(' ')
    })

    return {
        classes,
    }
}
