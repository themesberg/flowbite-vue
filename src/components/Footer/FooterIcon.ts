import { defineComponent, h } from 'vue'

export default defineComponent({
    name: 'FooterIcon',
    props: {
        href: {
            type: String,
            default: '/',
        },
        text: {
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
                href: props.href,
                class: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
              },
              {
                  default: () => [
                      h(
                        'span',
                        {},
                        slots,
                      ),
                      h(
                        'span',
                        {
                          class: 'sr-only'
                        },
                        props.text
                      ),
                  ],
              },
          )
  },
})