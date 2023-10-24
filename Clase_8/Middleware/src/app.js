import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware a nivel de aplicación
const loggerMiddleware = (req, res, next) => {
  console.log(`Solicitud recibida en: ${new Date()}`);
  next();
};

app.use(loggerMiddleware);

// Middleware a nivel de endpoint
const endpointMiddleware = (req, res, next) => {
  console.log('Middleware de nivel de endpoint');
  next();
};

app.get('/ruta', endpointMiddleware, (req, res) => {
  res.send('Ruta específica');
});

// Middleware a nivel del Router
const router = express.Router();

router.use((req, res, next) => {
  console.log('Middleware de nivel de Router');
  next();
});

router.get('/subruta', (req, res) => {
  res.send('Subruta específica');
});

app.use('/api', router);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Ha ocurrido un error en el servidor');
});

// Middleware incorporado
app.use(express.json());

// Middleware de terceros
app.use(cors());

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Aplicación Express con middleware!');
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
