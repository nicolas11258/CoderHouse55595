const usuarios = [];

function obtenerUsuarios() {
  return usuarios;
}

function agregarUsuario(nuevoUsuario) {
  usuarios.push(nuevoUsuario);
}

export { obtenerUsuarios, agregarUsuario };
