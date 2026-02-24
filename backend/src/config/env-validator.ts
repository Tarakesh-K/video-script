import dotenv from "dotenv";
dotenv.config();

/**
 * Validates that all required environment variables are present.
 * Throws an error if any are missing to prevent the app from starting in a broken state.
 */
const getEnv = () => {
  const required = {
    GROQ_URL: process.env.GROQ_URL,
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    GROQ_EXTRACT_MODEL: process.env.GROQ_EXTRACT_MODEL,
    GROQ_ENHANCE_MODEL: process.env.GROQ_ENHANCE_MODEL,
    PORT: process.env.PORT,
  };

  for (const [key, value] of Object.entries(required)) {
    if (!value) {
      throw new Error(`❌ Missing environment variable: ${key}`);
    }
  }

  // Return them as a readonly object for the rest of the app
  return {
    GROQ_URL: required.GROQ_URL!,
    GROQ_API_KEY: required.GROQ_API_KEY!,
    GROQ_EXTRACT_MODEL: required.GROQ_EXTRACT_MODEL!,
    GROQ_ENHANCE_MODEL: required.GROQ_ENHANCE_MODEL!,
    PORT: process.env.PORT,
  };
};

export const env = getEnv();