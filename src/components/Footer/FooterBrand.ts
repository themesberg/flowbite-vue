import { defineComponent, h } from 'vue'

export default defineComponent({
    name: 'FooterBrand',
    props: {
        href: {
            type: String,
            default: '/',
        },
        src: {
            type: String,
            default: '',
        },
        alt: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        component: {
            type: [Object, String],
            default: 'a',
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
                    class: 'flex items-center mb-4 sm:mb-0',
                    href: props.href,
                },
                {
                    default: () => [
                        h(
                            'img',
                            {
                              src: props.src,
                              class: "h-8 mr-3",
                              alt: props.alt
                            },
                        ),
                        h(
                            'span',
                            {
                                href: props.href,
                                class: 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white',
                            },
                            props.name,
                        ),
                    ]
                },
            )
    },
})