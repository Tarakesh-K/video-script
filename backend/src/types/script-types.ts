import { ExtractedOptions } from "@/types/extract-types.js";

export interface VideoScriptRequest {
  // The original "Hidden" AI version
  initialEnhancedPrompt: string;
  // The current text in the box (the user's edits)
  userContent: string;
  // The hard constraints (Duration, Language, etc.)
  extractedOptions: ExtractedOptions;
}