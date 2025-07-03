import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
