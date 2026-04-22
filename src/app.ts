import cors from "cors";
import express from "express";
import authRoutes from "./modules/auth/routes";
import postsRoutes from "./modules/posts/routes";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.options(/.*/, cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);

export default app;
