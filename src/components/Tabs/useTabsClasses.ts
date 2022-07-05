import type { Ref } from 'vue'
import { computed } from 'vue'
import type { TabsVariant } from './Tabs.vue'

export type UseTabsClassesProps = {
    variant: TabsVariant
}

export function useTabsClasses(props: UseTabsClassesProps): {
    ulClasses: Ref<string>,
    divClasses: Ref<string>,
} {

    const ulClasses = computed(() => {
        if(props.variant === 'default')
            return 'flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
        else if(props.variant === 'pills')
            return 'flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400'
        else if(props.variant === 'underline')
            return 'flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'
        return ''
    })

    const divClasses = computed(() => {
        if(props.variant === 'underline')
            return 'text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'
        return ''
    })

    return {
        ulClasses,
        divClasses,
    }
}