export type FileStatus = "new" | "sync" | "done";

export interface ComparisonResult {
  /** Relative path from content root, e.g. "docs/useform/register.mdx" */
  filePath: string;
  status: FileStatus;
  reasons: string[];
}

export interface StructureInfo {
  headingCount: number;
  codeBlockCount: number;
  tableRowCount: number;
  lineCount: number;
}

export type TranslationMode = "new" | "sync";

export interface TranslationTask {
  filePath: string;
  mode: TranslationMode;
  originContent: string;
  existingTranslation?: string;
  referenceFiles?: { path: string; content: string }[];
}

export interface TranslationResult {
  filePath: string;
  translatedContent: string;
  mode: TranslationMode;
}

export interface ValidationReport {
  passed: boolean;
  warnings: string[];
}

export interface TranslateConfig {
  maxFiles: number;
  dryRun: boolean;
  issueNumber?: number;
  inputFiles?: string[];
  anthropicApiKey: string;
}

export interface PrResult {
  branch: string;
  prUrl: string;
  filePath: string;
}
