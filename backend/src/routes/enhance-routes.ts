import { Router } from "express";
import { enhancePrompt } from "../controllers/enhance-controllers.js";
import { requireKeys } from "../middleware/validate.js";

const router = Router();

// Here you pass the "keyword" you want to validate
router.post(
  "/",
  requireKeys(["initialPrompt", "extractedOptions"]),
  enhancePrompt,
);

export default router;
