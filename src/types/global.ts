import type { Ref } from 'vue'

export type ClassInput = string | Record<string, boolean> | ClassInput[]

export type ClassRef = Ref<ClassInput>
