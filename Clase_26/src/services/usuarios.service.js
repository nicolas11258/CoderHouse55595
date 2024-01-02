import * as usuariosDAO from '../persistence/usuarios.dao.js';

function obtenerUsuarios() {
  return usuariosDAO.obtenerUsuarios();
}

function agregarUsuario(nuevoUsuario) {
  usuariosDAO.agregarUsuario(nuevoUsuario);
}

export { obtenerUsuarios, agregarUsuario };
