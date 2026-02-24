import { Request, Response } from "express";
import { extractedOptions } from "../services/extract-service.js";
import { ExtractedOptions } from "../types/extract-types.js";
import { SYSTEM_PROMPTS } from "../utils/prompts/prompts.js";

export const extractData = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    console.log(prompt);

    const data = await extractedOptions<ExtractedOptions>(
      SYSTEM_PROMPTS.EXTRACT_OPTIONS_PROMPT,
      prompt,
    );

    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error: any) {
    console.error("Controller Error:", error.message);
    return res.status(500).json({
      success: false,
      error: "Internal Server Error during extraction",
    });
  }
};
