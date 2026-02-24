import { Router } from "express";
import { generateVideoScript } from "../controllers/video-script-controllers.js";
import { requireKeys } from "../middleware/validate.js";

const router = Router();

// Here you pass the "keyword" you want to validate
router.post(
  "/",
  requireKeys(["initialEnhancedPrompt", "userContent", "extractedOptions"]),
  generateVideoScript,
);

export default router;
