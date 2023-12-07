import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import "dotenv/config.js";
import passport from "passport";
import initializePassport from "./config/passport.config.js";

import __dirname from "./utils.js";
import indexRouter from "./routes/views/index.js";
import loginRouter from "./routes/views/login.js";
import profileRouter from "./routes/views/profile.js";
import sessionsApiRouter from "./routes/api/sessions.js";
import recoveryPassword from "./routes/views/recoverypassword.js";

const app = express();
const port = 8080;

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.mongo, {});

// Configuración de Handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// Configuración de middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Configuración de middleware para manejar sesiones usando connect-mongo
app.use(
  session({
    secret: process.env.hash, // Clave secreta para firmar las cookies de sesión
    resave: false, // Evitar que se guarde la sesión en cada solicitud
    saveUninitialized: true, // Guardar la sesión incluso si no se ha modificado
    store: MongoStore.create({
      mongoUrl: process.env.mongo,

      ttl: 2 * 60, // Tiempo de vida de la sesión en segundos (2 minutos en este caso)
    }),
  })
);

initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/profile", profileRouter);
app.use("/logout", sessionsApiRouter);
app.use("/recovery", recoveryPassword);
app.use("/api/sessions", sessionsApiRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});

app.listen(port, () => {
  console.log(`Servidor escuchando por el puerto: ${port}`);
});

export default app;
