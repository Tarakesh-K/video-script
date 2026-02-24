import { env } from "../config/env-validator.js";
import { groq } from "../config/groq-config.js";
import { VideoScriptRequest } from "../types/script-types.js";
import { SYSTEM_PROMPTS } from "../utils/prompts/prompts.js";

export const generateVideoScriptService = async (data: VideoScriptRequest) => {
  const { initialEnhancedPrompt, userContent, extractedOptions } = data;

  // We construct a clear string for the AI to understand the context
  const userInstructions = `
    TECHNICAL CONSTRAINTS:
    - Duration: ${extractedOptions.duration || "Not specified"}
    - Platform: ${extractedOptions.platform || "Not specified"}
    - Language: ${extractedOptions.language || "English"}
    - Style/Category: ${extractedOptions.category || "General"}

    ORIGINAL ENHANCED REFERENCE:
    ${initialEnhancedPrompt || "No reference provided."}

    USER'S FINAL EDITS (PRIORITIZE THIS):
    ${userContent}
  `;

  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPTS.GENERATE_SCRIPT_PROMPT,
      },
      {
        role: "user",
        content: userInstructions,
      },
    ],
    model: env.GROQ_ENHANCE_MODEL,
    temperature: 0.7, // Lowered slightly from 1 for better structure consistency
  });

  // Return the string content directly
  return response.choices[0]?.message?.content || "";
};
