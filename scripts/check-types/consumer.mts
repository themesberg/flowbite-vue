// Type-checks the built package the way a consumer imports it, through its
// own `exports` map (run after `npm run build`). `nodenext` is the strictest
// resolution: an extensionless relative import in a .d.ts becomes `any` there.
import { FwbButton } from 'flowbite-vue'
import FwbAccordionPanel from 'flowbite-vue/components/FwbAccordionPanel'
import FwbButtonEntry from 'flowbite-vue/components/FwbButton'

import type { ButtonGradient } from 'flowbite-vue/components/FwbButton/types'

// Each per-component entry has the main entry's type, not `any`.
export const sameComponent: typeof FwbButton = FwbButtonEntry
// @ts-expect-error a component is not a number
export const notAny: number = FwbAccordionPanel

export const gradient: ButtonGradient = 'cyan-blue'

// @ts-expect-error only public components have an entry
export { default as Unknown } from 'flowbite-vue/components/FwbNope'
