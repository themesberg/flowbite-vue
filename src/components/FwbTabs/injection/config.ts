import type { TabsVariant } from '../types'
import type { InjectionKey, Ref, VNode } from 'vue'

export const TAB_ACTIVATE_KEY: InjectionKey<(name: string) => void> = Symbol('tab-activate')
export const TAB_ITEM_ACTIVE_CLASS_KEY: InjectionKey<Ref<string>> = Symbol('tab-item-active-class')
export const TAB_ACTIVE_NAME_KEY: InjectionKey<Ref<string>> = Symbol('tab-active-name')
export const TAB_DIRECTIVE_KEY: InjectionKey<Ref<'if' | 'show'>> = Symbol('tab-directive')
export const TAB_FULL_WIDTH_KEY: InjectionKey<Ref<boolean>> = Symbol('tab-full-width')
export const TAB_ICON_POSITION_KEY: InjectionKey<Ref<'left' | 'right'>> = Symbol('tab-icon-position')
export const TAB_ICON_SLOTS_KEY: InjectionKey<Ref<Record<string, (() => VNode[]) | undefined>>> = Symbol('tab-icon-slots')
export const TAB_ITEM_CLASS_KEY: InjectionKey<Ref<string>> = Symbol('tab-item-class')
export const TAB_VARIANT_KEY: InjectionKey<Ref<TabsVariant>> = Symbol('tab-variant')
export const TAB_VERTICAL_KEY: InjectionKey<Ref<boolean>> = Symbol('tab-vertical')
