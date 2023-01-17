import { defineComponent, h } from 'vue'

export default defineComponent({
    name: 'FooterCopyright',
    props: {
        href: {
            type: String,
            default: '/',
        },
        by: {
            type: String,
            default: '',
        },
        year: {
            type: Number,
            default: '',
        },
        suffix: {
            type: String,
            default: '',
        },
        component: {
            type: [Object, String],
            default: 'span',
        },
    },
    emits: [
        'click',
    ],
    setup(props, { slots }) {
        return () =>
            h(
                // @ts-ignore
                props.component,
                {
                    class: 'text-sm text-gray-500 sm:text-center dark:text-gray-400',
                },
                {
                    default: () => [
                        h(
                            'span',
                            {},
                            "© " + props.year + " "
                        ),
                        h(
                            'a',
                            {
                                href: props.href,
                                class: 'hover:underline',
                            },
                            props.by,
                        ),
                        h(
                            'span',
                            {},
                            props.suffix
                        ),],
                },
            )
    },
})