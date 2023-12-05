import userModel from "../models/user.model.js";
import { createHash } from "../utils.js";

// Registra a un nuevo usuario.
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res
        .status(401)
        .send({ status: "Error", error: "Incomplete values" });

    const user = new userModel({ name, email, password: createHash(password) });
    await user.save();
    req.session.name = name;
    req.session.email = email;
    res.redirect("/profile");
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .send({ status: "Error", error: "Incomplete values" });
  }
};

// Autentica a un usuario y almacena la información en la sesión.
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(401)
        .send({ status: "Error", error: "Incomplete values" });

    const user = await userModel.findOne({ email, password });
    if (user) {
      req.session.name = user.name;
      req.session.email = user.email;
      res.redirect("/profile");
    } else {
      return res
        .status(401)
        .send({ status: "Error", error: "Usuario y/o contraseña incorrecta" });
    }
  } catch (error) {
    console.log("Error, credenciales invalidas", error);
    res.redirect("/error");
  }
};

//Cierra la sesión del usuario.
export const logOutUser = async (req, res) => {
  try {
    // Verifica si el usuario está autenticado antes de cerrar la sesión
    if (req.session.user) {
      delete req.session.user;
      // Opcionalmente, puedes destruir completamente la sesión
      req.session.destroy((err) => {
        if (err) {
          console.error("Error al cerrar la sesión", err);
          res.status(500).send("Error al cerrar la sesión");
        } else {
          res.redirect("/login");
        }
      });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error("Error al cerrar la sesión", error);
    res.status(500).send("Error al cerrar la sesión");
  }
};
