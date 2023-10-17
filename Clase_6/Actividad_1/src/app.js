import express from 'express';
const app = express();
const port = 8080;

// Endpoint GET '/bienvenida'
app.get('/bienvenida', (req, res) => {
  // Devolver un HTML con letras en color azul
  const htmlResponse = `
  <html>
    <body style="color: blue;">
      <h1>Bienvenidos a mi aplicación Express con módulos ES6!</h1>
    </body>
  </html>`;
  res.send(htmlResponse);
});

// Endpoint GET '/usuario'
app.get('/usuario', (req, res) => {
  // Devolver un objeto con datos de un usuario falso
  const usuario = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 30,
    correo: 'juan.perez@example.com'
  };
  res.json(usuario);
});

app.listen(port, () => {
  console.log(`El servidor Express está escuchando en el puerto ${port}`);
});
