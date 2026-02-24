import Groq from "groq-sdk";
import { env } from "../config/env-validator.js";

export const groq = new Groq({ apiKey: env.GROQ_API_KEY });
