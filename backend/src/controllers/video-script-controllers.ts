import { generateVideoScriptService } from "../services/video-script-service.js";
import { VideoScriptRequest } from "../types/script-types.js";
import { Request, Response } from "express";

export const generateVideoScript = async (req: Request, res: Response) => {
  try {
    // req.body should match the EnhancedPrompt type
    const data: VideoScriptRequest = req.body;

    const result = await generateVideoScriptService(data);

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
