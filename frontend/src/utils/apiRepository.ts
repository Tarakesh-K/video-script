import { EnhancedPrompt, VideoScriptRequest } from "@/types/promptTypes";
import axios from "axios";

// Create the base instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiRepository = {
  extractOptions: async (prompt: string) => {
    const response = await api.post("/extract", { prompt });
    return response.data;
  },

  enhanceOptions: async (data: EnhancedPrompt) => {
    // Pass the object directly so req.body has 'initialPrompt' and 'extractedOptions'
    const response = await api.post("/enhance", data);
    return response.data;
  },

  videoScript: async (data: VideoScriptRequest) => {
    const response = await api.post("/video-script", data);
    return response.data;
  },
};
