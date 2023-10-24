import express from 'express'
const app = express();
const port = 3000;

// Arreglo de usuarios (simulado)
let usuarios = [
  { id: 1, nombre: 'Juan', apellido: 'Pérez' },
  { id: 2, nombre: 'María', apellido: 'González' },
  { id: 3, nombre: 'Carlos', apellido: 'Rodríguez' }
];

// Middleware para analizar el cuerpo de las solicitudes como datos codificados en formularios
app.use(express.urlencoded({ extended: true }));

// Middleware para analizar el cuerpo de las solicitudes como datos JSON
app.use(express.json());

// Obtener todos los usuarios (GET)
app.get('/api/usuarios', (req, res) => {
  res.status(200).json(usuarios);
});

// Obtener un usuario por ID (GET)
app.get('/api/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(user => user.id === id);
  if (!usuario) {
    res.status(404).json({ mensaje: 'Usuario no encontrado' });
  } else {
    res.status(200).json(usuario);
  }
});

// Crear un nuevo usuario (POST)
app.post('/api/usuarios', (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    apellido: req.body.apellido
  };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// Actualizar un usuario por ID (PUT)
app.put('/api/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(user => user.id === id);
  if (!usuario) {
    res.status(404).json({ mensaje: 'Usuario no encontrado' });
  } else {
    usuario.nombre = req.body.nombre || usuario.nombre;
    usuario.apellido = req.body.apellido || usuario.apellido;
    res.status(200).json(usuario);
  }
});

// Eliminar un usuario por ID (DELETE)
app.delete('/api/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuarioIndex = usuarios.findIndex(user => user.id === id);
  if (usuarioIndex === -1) {
    res.status(404).json({ mensaje: 'Usuario no encontrado' });
  } else {
    const usuarioEliminado = usuarios.splice(usuarioIndex, 1)[0];
    res.status(200).json(usuarioEliminado);
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

