import express from 'express';
import fs from 'fs';

const app = express();
const port = 8080;
const dataFile = 'usuarios.json';

// Middleware para analizar los query parameters
app.use(express.urlencoded({ extended: true }));

// Ruta GET '/' para obtener usuarios con filtro por género
app.get('/', (req, res) => {
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al cargar usuarios');
      return;
    }
    const usuarios = JSON.parse(data);
    const generoQuery = req.query.genero;

    if (generoQuery) {
      // Filtrar usuarios por género si se proporciona el query parameter
      const usuariosFiltrados = usuarios.filter(user => user.genero === generoQuery);
      
      res.json(usuariosFiltrados);
    } else {
      // Devolver a todos los usuarios si no se proporciona el query parameter
      res.json(usuarios);
    }
  });
});

app.listen(port, () => {
  console.log(`El servidor Express está escuchando en el puerto ${port}`);
});
