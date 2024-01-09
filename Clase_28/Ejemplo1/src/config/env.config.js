import dotenv from "dotenv";

dotenv.config()

export default {
    persistence: process.env.PERSISTENCE,
    DB: process.env.DB,
}