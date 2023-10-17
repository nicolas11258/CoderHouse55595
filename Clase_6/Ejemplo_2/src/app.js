import express from 'express';

const app = express();
const port = 8080;

// Ruta GET '/saludo'
app.get('/saludo', (req, res) => {
  res.send('¡Hola a todos, pero ahora desde express con módulos ES6!');
});

app.listen(port, () => {
  console.log(`El servidor Express está escuchando en el puerto ${port}`);
});
