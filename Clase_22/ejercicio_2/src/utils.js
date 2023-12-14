import jwt from "jsonwebtoken";
import "dotenv/config.js";

const PRIVATE_KEY = process.env.KEYSECRET;

export const generateToken = (user) => {
  const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: "1d" });
  return token;
};

export const authToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).send({ status: "error", error: "Unauthorized" });
  const token = authHeader.split(" ")[1];
  jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
    if (error)
      return res.status(401).send({ status: "error", error: "Unauthorized" });
    req.user = credentials.user;
    next();
  });
};
