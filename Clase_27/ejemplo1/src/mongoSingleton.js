import mongoose from "mongoose";
import "dotenv/config.js";


export default class MongoSingleton {
  static #instance;
  constructor() {
    mongoose.connect(process.env.DB, {});
  }

  static getInstance() {
    if (this.#instance) {
      console.log("Alredy connected");
      return this.#instance;
    }
    this.#instance = new MongoSingleton();
    console.log("connected");
    return this.#instance;
  }
}
