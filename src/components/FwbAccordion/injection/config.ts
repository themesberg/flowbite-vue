import type { AccordionPanel, AccordionState } from '../types'
import type { InjectionKey } from 'vue'

// Each accordion and each panel provides its own reactive state, so state never
// leaks between accordions, nor between separate Vue apps on the same page.
export const ACCORDION_STATE_KEY: InjectionKey<AccordionState> = Symbol('accordion-state')
export const ACCORDION_PANEL_KEY: InjectionKey<AccordionPanel> = Symbol('accordion-panel')
