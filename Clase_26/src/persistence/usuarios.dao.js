const usuarios = [];

const obtenerUsuarios = () => {
  return usuarios;
};

const agregarUsuario = (nuevoUsuario) => {
  usuarios.push(nuevoUsuario);
};

export { obtenerUsuarios, agregarUsuario };
