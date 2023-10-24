const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Importar los routers
const usersRouter = require('./users.router');
const petsRouter = require('./pets.outer');

// Conectar los routers a las rutas principales
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
