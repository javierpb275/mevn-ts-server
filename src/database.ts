import mongoose from "mongoose";
import config from "./config/config";

export const startConnection = async () => {
  try {
    const db = await mongoose.connect(config.DB.URI);
    console.log(`connected to db ${db.connection.name}`);
  } catch (error) {
    console.log(`error connection: ${error}`);
  }
};
