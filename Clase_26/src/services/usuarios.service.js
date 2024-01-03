import * as usuariosDAO from "../persistence/usuarios.dao.js";

const obtenerUsuarios = () => {
  return usuariosDAO.obtenerUsuarios();
};

const agregarUsuario = (nuevoUsuario) => {
  usuariosDAO.agregarUsuario(nuevoUsuario);
};

export { obtenerUsuarios, agregarUsuario };
