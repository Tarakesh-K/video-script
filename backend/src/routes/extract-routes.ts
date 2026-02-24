import { Router } from "express";
import { extractData } from "@/controllers/extract-controllers.js";
import { requireKey } from "@/middleware/validate.js";

const router = Router();

// Here you pass the "keyword" you want to validate
router.post("/", requireKey("prompt"), extractData);

export default router;