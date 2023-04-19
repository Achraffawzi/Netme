import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();
  console.log(config?.MONGO_URI);

  try {
    await mongoose.connect(config?.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
};
