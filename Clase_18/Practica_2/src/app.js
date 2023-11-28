import express from 'express';
import session from 'express-session';

const app = express();
const port = 8080;

// Configuración de express-session
app.use(
  session({
    secret: 'mi-secreto', // Cambia esto por una cadena más segura en un entorno de producción
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }, // Duración de la sesión en milisegundos (60 segundos en este caso)
  })
);

// Middleware para contar las visitas
app.use((req, res, next) => {
  if (!req.session.visits) {
    req.session.visits = 1;
    req.session.name = ''; // Variable para almacenar el nombre
  } else {
    req.session.visits++;
  }
  next();
});

// Ruta root
app.get('/', (req, res) => {
  let message = 'Te damos la bienvenida';

  // Verificar si se proporcionó un nombre en los parámetros de consulta
  if (req.query.name && !req.session.name) {
    req.session.name = req.query.name;
    message = `Bienvenido ${req.query.name}`;
  } else if (req.session.name) {
    message = `${req.session.name}, visitaste la página ${req.session.visits} veces`;
  }

  res.send(message);
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
