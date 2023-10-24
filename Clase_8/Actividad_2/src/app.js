import express from 'express';
import { usersRouter } from './routes/users.router.js';
import { petsRouter } from './routes/pet.router.js';
const app = express();
const port = 3000;

// Middleware para analizar el cuerpo de las solicitudes como datos codificados en formularios
app.use(express.urlencoded({ extended: true }));

// Middleware para analizar el cuerpo de las solicitudes como datos JSON
app.use(express.json());

// Configurar Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static('./src/public'));

// Conectar los routers a las rutas principales
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
