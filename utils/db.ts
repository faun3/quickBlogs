import mongoose from "mongoose";

const connect = async () => {
  try {
    if (!process.env.MONGO_CONNECTION_STRING) {
      throw new Error("mongoDB connection key not present in .env");
    } else {
      await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    }
  } catch (error) {
    throw new Error("connection failed (for some reason)");
  }
};

export default connect;
