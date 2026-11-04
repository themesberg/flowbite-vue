export interface ComponentExportEntry {
  name: string
  filePath: string
}

export declare const EXCLUDED_COMPONENTS: string[]

export declare function parseIndexExports (
  indexSource: string,
  options?: { exclude?: string[] },
): ComponentExportEntry[]
