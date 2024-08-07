import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.mjs";
import userRoute from "./routes/userRoute.mjs";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

app.use(cookieParser());

app.use("/", authRoute);
app.use("/user", userRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
