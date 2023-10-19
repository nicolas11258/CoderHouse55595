import express from 'express';

const app = express();
const port = 8080;

// Ruta GET '/persona' que devuelve un JSON con información de una persona
app.get('/persona', (req, res) => {
  const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 30,
    correo: 'juan.perez@example.com'
  };

  res.status(200).json(persona); // Código 200 OK y respuesta en formato JSON
});

app.listen(port, () => {
  console.log(`El servidor Express está escuchando en el puerto ${port}`);
});
