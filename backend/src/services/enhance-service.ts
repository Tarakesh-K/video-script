import { env } from "../config/env-validator.js";
import { groq } from "../config/groq-config.js";
import { EnhancedPrompt } from "../types/enhance-types.js";
import { SYSTEM_PROMPTS } from "../utils/prompts/prompts.js";

export const enhancePromptService = async (data: EnhancedPrompt) => {
  const { initialPrompt, extractedOptions } = data;

  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPTS.ENHANCE_PROMPT, // Prompt used to define it
      },
      {
        role: "user",
        content: `
          Initial Prompt: ${initialPrompt}
          Settings:
          - Duration: ${extractedOptions.duration}
          - Language: ${extractedOptions.language}
          - Platform: ${extractedOptions.platform}
          - Size: ${extractedOptions.size}
          - Category: ${extractedOptions.category}
        `,
      },
    ],
    model: env.GROQ_ENHANCE_MODEL, // Use a high-reasoning model for creative writing
    temperature: 0.7, // Used for controlled responses every time
  });

  const enhancedText = response.choices[0]?.message?.content?.trim();

  if (!enhancedText) {
    throw new Error("Failed to generate an enhanced prompt from Groq");
  }

  return { enhancedPrompt: enhancedText };
};