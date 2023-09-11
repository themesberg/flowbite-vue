import { defineComponent, h, resolveComponent } from 'vue'
import classNames from 'classnames'

export default defineComponent({
    name: 'NavbarLink',
    props: {
        link: {
            type: String,
            default: '/',
        },
        isActive: {
            type: Boolean,
            default: false,
        },
        component: {
            type: [Object, String],
            default: 'a',
        },
        linkAttr: {
            type: String,
            default: 'href',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    emits: [
        'click',
    ],
    setup(props, { slots, emit }) {
        const currentPageClasses = 'bg-blue-700 md:bg-transparent text-white md:text-blue-700 dark:text-white'
        const defaultStateClasses = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
        const defaultClasses = 'block py-2 pr-4 pl-3 rounded md:p-0'
        const linkClasses = classNames(
            defaultClasses,
            props.isActive ? currentPageClasses : defaultStateClasses,
        )
        const handleClick = (event: Event) => {
            if (props.disabled) {
                return
            }
            emit('click', event)
        }
        return () =>
            h('li', null, h(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                resolveComponent(props.component),
                {
                    ...props,
                    class: linkClasses,
                    [props.linkAttr]: props.link,
                    onClick: handleClick,
                },
                {
                    default: () => slots.default && slots.default(),
                },
            ))
    },
})
