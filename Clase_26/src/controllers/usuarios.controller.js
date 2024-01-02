const usuarios = [];

const obtenerUsuarios = (req, res) => res.json(usuarios);

const agregarUsuario = (req, res) => {
  const { body } = req;
  const { nuevoUsuario } = body;
  usuarios.push(nuevoUsuario);
  res.json({ mensaje: 'Usuario agregado correctamente' });
};

export { obtenerUsuarios, agregarUsuario };
