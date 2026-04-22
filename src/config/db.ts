import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("🔥 Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Error:", (error as Error).message);
    process.exit(1);
  }
};
