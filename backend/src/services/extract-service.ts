import axios from "axios";
import { env } from "../config/env-validator.js";

export const extractedOptions = async <T>(
  systemPrompt: string,
  userPrompt: string,
): Promise<T | Error> => {
  // 1. Check your variables. If GROQ_URL is missing, it falls back to the official one.
  const url = env.GROQ_URL;
  const apiKey = env.GROQ_API_KEY;
  const model = env.GROQ_EXTRACT_MODEL;

  const response = await axios.post(
    url,
    {
      model: model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      // Required by Groq when using 'json_object'
      response_format: { type: "json_object" },
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    },
  );

  // Groq sends a JSON string inside content; we parse it back to an object
  const content = response.data.choices[0].message.content;
  return typeof content === "string" ? JSON.parse(content) : content;
};
