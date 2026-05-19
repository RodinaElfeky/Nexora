import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected");
  });

  mongoose.connection.on("error", (err) => {
    console.log("MongoDB error:", err);
  });

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/Nexora`);
  } catch (error) {
    console.error("Connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;