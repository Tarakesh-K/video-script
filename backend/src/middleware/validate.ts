import { Request, Response, NextFunction } from "express";

// This function accepts the "keyword" as an argument
export const requireKey = (keyword: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // 1. Check if body exists
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        error: "Missing Body",
        message: "Request body is required.",
      });
    }

    // 2. Check if the specific keyword exists in the body
    if (!(keyword in req.body)) {
      return res.status(400).json({
        error: "Validation Error",
        message: `The required key '${keyword}' is missing from the request.`,
      });
    }

    next(); // Key found! Proceed to controller
  };
};

export const requireKeys = (keywords: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // 1. Check if body exists
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        error: "Missing Body",
        message: "Request body is required.",
      });
    }

    // 2. Identify all missing keys
    const missingKeys = keywords.filter((key) => !(key in req.body));

    if (missingKeys.length > 0) {
      return res.status(400).json({
        error: "Validation Error",
        message: `Missing required keys: ${missingKeys.join(", ")}`,
      });
    }

    next(); // All keys present!
  };
};
