import userModel from "../models/user.model.js";

// Registra a un nuevo usuario.
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new userModel({ name, email, password });
    await user.save();
    req.session.name = name;
    req.session.email = email;
    res.redirect("http://localhost:8080/profile");
  } catch (error) {
    console.log(error);
    res.redirect("http://localhost:8080");
  }
};

// Autentica a un usuario y almacena la información en la sesión.
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      req.session.user = user; // Almacena el usuario en la sesión
      res.redirect("http://localhost:8080/profile");
    } else {
      res.redirect("http://localhost:8080");
    }
  } catch (error) {
    console.log("Error, credenciales invalidas", error);
    res.redirect("http://localhost:8080");
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
          res.redirect("http://localhost:8080");
        }
      });
    } else {
      res.redirect("http://localhost:8080");
    }
  } catch (error) {
    console.error("Error al cerrar la sesión", error);
    res.status(500).send("Error al cerrar la sesión");
  }
};
