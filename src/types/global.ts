import type { Ref } from 'vue'

export type ClassInput = string | Record<string, boolean> | Array<string | Record<string, boolean>>

export type ClassRef = Ref<ClassInput>
