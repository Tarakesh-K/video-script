import { Request, Response } from "express";
import { enhancePromptService } from "../services/enhance-service.js";
import { EnhancedPrompt } from "../types/enhance-types.js";

export const enhancePrompt = async (req: Request, res: Response) => {
  try {
    // req.body should match the EnhancedPrompt type
    const data: EnhancedPrompt = req.body;

    const result = await enhancePromptService(data);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.error("Enhance Controller Error:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
