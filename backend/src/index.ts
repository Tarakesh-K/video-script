import express from "express";
import cors from "cors";
import extractRoutes from "./routes/extract-routes.js";
import enhanceRoutes from "./routes/enhance-routes.js";
import videoScriptRoutes from "./routes/video-script-routes.js";

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

export default app;

if (!process.env.VERCEL) {
  // 2. Use dynamic import to load the validator only when needed
  import("./config/env-validator.js").then(({ env }) => {
    const PORT = env.PORT || 3001;
    
    app.listen(PORT, () => {
      console.log(`🚀 Local Server running on http://localhost:${PORT}`);
    });
  }).catch(err => {
    console.error("Failed to load environment validator:", err);
  });
}
