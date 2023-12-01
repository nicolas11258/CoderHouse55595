import userModel from "../models/user.model.js";

// Registra a un nuevo usuario.
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new userModel({ name, email, password });
    await user.save();
    res.send("Usuario registrado exitosamente");
    res.redirect("/profile");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al registrar usuario");
    res.redirect("/");
  }
};

// Autentica a un usuario y almacena la información en la sesión.
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      req.session.user = user; // Almacena el usuario en la sesión
      res.send('Inicio de sesión exitoso.');
      res.redirect("/profile");
    } else {
      res.status(401).send('Credenciales inválidas.');
      res.redirect("/");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
    res.redirect("/");
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
          console.error(err);
          res.status(500).send("Error al cerrar la sesión");
        } else {
          res.redirect("/");
        }
      });
    } else {
      res.redirect("/");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al cerrar la sesión");
  }
};
