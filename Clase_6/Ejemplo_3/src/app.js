import express from 'express';
import fs from 'fs';

const app = express();
const port = 8080;

// Ruta GET '/usuarios' para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  fs.readFile('usuarios.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo de usuarios');
      return;
    }
    const usuarios = JSON.parse(data);
    res.json(usuarios);
  });
});

// Ruta GET '/usuarios/:userId' para obtener un usuario por su ID
app.get('/usuarios/:userId', (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  fs.readFile('usuarios.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo de usuarios');
      return;
    }
    const usuarios = JSON.parse(data);
    const usuario = usuarios.find(user => user.id === userId);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  });
});

app.listen(port, () => {
  console.log(`El servidor Express está escuchando en el puerto ${port}`);
});
