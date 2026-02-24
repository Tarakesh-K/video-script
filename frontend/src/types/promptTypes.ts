import { Dispatch, SetStateAction } from "react";

// Define the shape of our extracted video options
export interface ExtractedOptions {
  duration?: string | null;
  language?: string | null;
  platform?: string | null;
  size?: "Landscape" | "Vertical" | "Square" | null;
  category?: string | null;
}

export interface EnhancedPrompt {
  initialPrompt: string;
  extractedOptions: ExtractedOptions;
}

export interface VideoScriptRequest {
  // The original "Hidden" AI version
  initialEnhancedPrompt: string;
  // The current text in the box (the user's edits)
  userContent: string;
  // The hard constraints (Duration, Language, etc.)
  extractedOptions: ExtractedOptions;
}

export interface PromptContextType {
  // Step 1 & 4: The main prompt text
  prompt: string;
  setPrompt: (val: string) => void;

  // Step 2 & 3: The structured data
  options: ExtractedOptions;
  setOptions: Dispatch<SetStateAction<ExtractedOptions>>;
  updateOption: (key: keyof ExtractedOptions, value: string | null) => void;
  enhancedPrompt: string;
  setEnhancedPrompt: Dispatch<SetStateAction<string>>;

  script: string;
  setScript: Dispatch<SetStateAction<string>>;

  // Loading states for UI feedback
  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
}

export interface PromptInputProps {
  value: string;
  placeholder?: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}
