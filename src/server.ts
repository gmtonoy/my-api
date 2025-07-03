import express from "express";
import { userRouter } from "./routes/userRoutes";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/users", userRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
