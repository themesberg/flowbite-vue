import type { Ref } from 'vue'
import { computed } from 'vue'
import type {
    ThemableChildrenApply,
} from '@/components/utils/FlowbiteThemable/components/FlowbiteThemableChildren/types'
import { useFlowbiteThemable } from '@/components/utils/FlowbiteThemable/composables/useFlowbiteThemable'

type UseThemableChildrenReturns = {
    classes: Ref<string>
}

type UseThemableChildrenProps = {
    apply: Ref<ThemableChildrenApply[]>
}

export function useFlowbiteThemableChildrenClasses(props: UseThemableChildrenProps): UseThemableChildrenReturns {

    const { textClasses, borderClasses, backgroundClasses, hoverClasses, disabledClasses, isActive } = useFlowbiteThemable()

    const classes = computed(() => {
        if(!isActive.value) return ''
        const _classes = []
        if(props.apply.value.includes('text')) _classes.push(textClasses)
        if(props.apply.value.includes('border')) _classes.push(borderClasses)
        if(props.apply.value.includes('background')) _classes.push(backgroundClasses)
        if(props.apply.value.includes('hover')) _classes.push(hoverClasses)
        if(props.apply.value.includes('disabled')) _classes.push(disabledClasses)
        return _classes.join(' ')
    })

    return {
        classes,
    }
}
