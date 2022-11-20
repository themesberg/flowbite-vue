import { defineComponent, h } from 'vue'

export default defineComponent({
    name: 'NavbarLogo',
    props: {
        link: {
            type: String,
            default: '/',
        },
        imageUrl: {
            type: String,
            default: '/assets/logo.svg',
        },
        alt: {
            type: String,
            default: 'Logo',
        },
        component: {
            type: [Object, String],
            default: 'a',
        },
        linkAttr: {
            type: String,
            default: 'href',
        },
    },
    emits: [
        'click',
    ],
    setup(props, { slots }) {
        return () =>
            h(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                props.component,
                {
                    [props.linkAttr]: props.link,
                    class: 'flex items-center',
                },
                {
                    default: () => [
                        h(
                            'img',
                            {
                                src: props.imageUrl,
                                class: 'mr-3 h-6 sm:h-10',
                                alt: props.alt,
                            },
                        ),
                        h(
                            'span',
                            {
                                class: 'self-center text-xl font-semibold whitespace-nowrap dark:text-white',
                            },
                            slots,
                        )],
                },
            )
    },
})
