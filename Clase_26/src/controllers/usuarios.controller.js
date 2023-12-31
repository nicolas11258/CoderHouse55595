import * as usuariosService from "../services/usuarios.service.js";

const obtenerUsuarios = (req, res) =>
  res.json(usuariosService.obtenerUsuarios());

const agregarUsuario = (req, res) => {
  const { body } = req;
  usuariosService.agregarUsuario(body);
  res.json({ mensaje: "Usuario agregado correctamente" });
};

export { obtenerUsuarios, agregarUsuario };
