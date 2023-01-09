import { defineComponent, h } from 'vue'

export default defineComponent({
    name: 'FooterLink',
    props: {
        href: {
            type: String,
            default: '/',
        },
        component: {
            type: [Object, String],
            default: 'li',
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
              {},
              {
                  default: () => [
                      h(
                          'a',
                          {
                            href: props.href,
                            class: 'mr-4 hover:underline md:mr-6',
                          },
                          slots,
                      ),
                  ],
              },
          )
  },
    // setup(props, { slots }) {
    //     return () =>
    //         h(
    //             // @ts-ignore
    //             props.component,
                // {
                //     href: props.href,
                //     class: 'flex items-center',
                // },
    //         )
    // },
})