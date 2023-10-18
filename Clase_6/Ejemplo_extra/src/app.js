import express from 'express';

const app = express();
const port = 8080;

// Ruta GET '/usuario/:id' que utiliza un parámetro de ruta
app.get('/usuario/:id', (req, res) => {
  const userId = req.params.id; // Obtén el valor del parámetro de ruta ":id"
  const nombre = req.query.nombre; // Obtén el valor del parámetro de consulta "nombre"

  // Construye una página HTML mejorada con la información del usuario y una imagen de perfil
  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Perfil de Usuario</title>
        </head>
        <body>
            <main>
            <div class="usuario-profile" style="text-align: center; background-color: #f5f5f5; padding: 20px;">
                <h1 style="color: #333;">Detalles del Usuario</h1>
                <p>ID del Usuario: <span style="font-weight: bold; color: #007bff;">${userId}</span></p>
                <p>Nombre del Usuario: <span style="font-weight: bold; color: #007bff;">${nombre}</span></p>
            </div>
            </main>
        </body>
    </html>
  `;

  res.send(htmlResponse);
});

app.listen(port, () => {
  console.log(`El servidor Express está escuchando en el puerto ${port}`);
});
