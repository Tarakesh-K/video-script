"use client";
import { PromptContextType, ExtractedOptions } from "@/types/promptTypes";
import { createContext, useContext, useState, ReactNode } from "react";

const PromptContext = createContext<PromptContextType | undefined>(undefined);

export const PromptProvider = ({ children }: { children: ReactNode }) => {
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Initial state for extracted options
  const [options, setOptions] = useState<ExtractedOptions>({
    duration: null,
    language: null,
    platform: null,
    size: null,
    category: null,
  });
  const [enhancedPrompt, setEnhancedPrompt] = useState<string>("");
  const [script, setScript] = useState<string>("");

  // Helper to update a single field (Step 3: User Intervention)
  const updateOption = (key: keyof ExtractedOptions, value: string | null) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <PromptContext.Provider
      value={{
        prompt,
        setPrompt,
        options,
        setOptions,
        enhancedPrompt,
        setEnhancedPrompt,
        script,
        setScript,
        updateOption,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </PromptContext.Provider>
  );
};

export const usePrompt = () => {
  const context = useContext(PromptContext);
  if (!context) {
    throw new Error("usePrompt must be used within a PromptProvider");
  }
  return context;
};
