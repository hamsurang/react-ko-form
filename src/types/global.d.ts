interface Window {
  docsearch?: (options: {
    appId: string
    apiKey: string
    indexName: string
    inputSelector: string
    transformData?: (suggestions: Array<{ url: string; [key: string]: unknown }>) => Array<{ url: string; [key: string]: unknown }>
    handleSelected?: (
      input: HTMLInputElement,
      event: Event,
      suggestion: { url: string; [key: string]: unknown },
      datasetNumber: number,
      context: { selectionMethod: string }
    ) => void
  }) => void
}

declare module "*.mdx" {
  export const meta: {
    title: string
    description: string
  }
}
