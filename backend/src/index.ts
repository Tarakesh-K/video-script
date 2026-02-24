import express from "express";
import cors from "cors";
import { env } from "@/config/env-validator.js";
import extractRoutes from "@/routes/extract-routes.js";
import enhanceRoutes from "@/routes/enhance-routes.js";
import videoScriptRoutes from "@/routes/video-script-routes.js";

const app = express();
const apiRouter = express.Router(); // 1. Create Router

app.use(cors());
app.use(express.json());

// 2. Attach the route to the ROUTER, not the APP
apiRouter.get("/", (_req, res) => {
  res.json({ message: "API Backend running at /api" });
});
apiRouter.use("/extract", extractRoutes);
apiRouter.use("/enhance", enhanceRoutes);
apiRouter.use("/video-script", videoScriptRoutes);

// 3. Mount the router (This says: all routes in apiRouter start with /api)
app.use("/api", apiRouter);

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
