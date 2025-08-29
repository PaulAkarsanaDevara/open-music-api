import mongoose from "mongoose";
import { config } from "./app.config";

export const connectToDB = async () => {
  try {
    await mongoose.connect(config.mongo.uri as string);
    console.log(" MongoDB connected");
  } catch (err) {
    console.error(" MongoDB connection failed:", err);
    process.exit(1);
  }
};