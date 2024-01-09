import dotenv from "dotenv";

dotenv.config()

export default {
    persistence: process.env.PERSISTENCE,
    db: process.env.DB,
}