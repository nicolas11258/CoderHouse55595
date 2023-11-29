import express from 'express';
import __dirname from "./utils.js";
import cookieParser from 'cookie-parser';

const app = express();
const port = 8080;

// Middleware para parsear cookies
app.use(express.urlencoded({ extended: true }));

//hola mundo hash512
app.use(
  cookieParser(
    "e361ecc31f2aac2066a3103d3b14dc63b5984b028f9f2d09dee67460ce2702bc81673acf58109b553324852c62a227d9a75d4c2f686580270fe143048f47c33c"
  )
);

// Ruta para la vista
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Ruta para manejar el botón getCookie
app.get('/getCookie', (req, res) => {
  // Obtener y mostrar la cookie por consola
  console.log('Cookie:', req.cookies.user);
  console.log('Cookie:', req.cookies.name);
  res.send('Cookie mostrada en la consola.');
});

// Ruta para manejar el botón submit
app.post('/submit', (req, res) => {
  const { name, email } = req.body;

  // Crear cookie con formato {user: correoDelInput}
  res.cookie('user', email, { maxAge: 10000 }); // 10 segundos
  res.cookie('name', name, { maxAge: 10000 }); // 10 segundos
  res.send('Cookie creada.');
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
