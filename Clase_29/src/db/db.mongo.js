import mongoose from "mongoose";
import config from "../config/env.config.js";

const mongoConect = async () => {
  try {
    await mongoose.connect(config.db);
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};

export default mongoConect;
