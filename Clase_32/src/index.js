import express from "express";
import compression from "express-compression";
import router from "./router/index.js";
import errorHandler from "./middlewares/errors/handler.errors.js";

const app = express();

app.use(express.json());

app.use(compression({ brotli: { enabled: true, zlib: { } } }))

// app.use(compression());



router(app);

app.use(errorHandler);

export default app;
