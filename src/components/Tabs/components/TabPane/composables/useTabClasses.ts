import type { Ref } from 'vue'
import { computed } from 'vue'
import type { TabsVariant } from '../../Tabs.vue'

export type TabClassMap =  { disabled: string, default: string, active: string }

export type UseTabClassesProps = {
    variant?: TabsVariant
    active: Ref<boolean>
    disabled: Ref<boolean>
}

const defaultTabClasses: TabClassMap = {
    default: 'cursor-pointer inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300',
    active: 'cursor-pointer inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500',
    disabled: 'inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500',
}
const underlineTabClasses: TabClassMap = {
    default: 'cursor-pointer inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
    active: 'cursor-pointer inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500',
    disabled: 'inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500',
}
const pillsTabClasses: TabClassMap = {
    default: 'cursor-pointer inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
    active: 'cursor-pointer inline-block py-3 px-4 text-white bg-blue-600 rounded-lg active',
    disabled: 'inline-block py-3 px-4 text-gray-400 cursor-not-allowed dark:text-gray-500',
}

export function useTabClasses(props: UseTabClassesProps): {
    tabClasses: Ref<string>,
} {

    const tabClasses = computed(() => {
        const tabClassType: keyof TabClassMap = props.active.value ? 'active' : props.disabled.value ? 'disabled' : 'default'

        if(props.variant === 'default')
            return defaultTabClasses[tabClassType]
        else if(props.variant === 'underline')
            return underlineTabClasses[tabClassType]
        else if (props.variant === 'pills')
            return pillsTabClasses[tabClassType]
        return ''
    })

    return {
        tabClasses,
    }
}