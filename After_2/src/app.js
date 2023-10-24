import express from 'express'

const app = express();
const port = 3000;

// Middleware para analizar el cuerpo de las solicitudes como datos codificados en formularios
app.use(express.urlencoded({ extended: true }));

// Middleware para analizar el cuerpo de las solicitudes como datos JSON
app.use(express.json());

// Datos simulados de mascotas (reemplaza esto con tu base de datos real)
const mascotas = [
  { id: 1, nombre: 'Rex', tipo: 'Perro' },
  { id: 2, nombre: 'Whiskers', tipo: 'Gato' },
  { id: 3, nombre: 'Nemo', tipo: 'Pez' },
];

// Ruta para obtener todas las mascotas
app.get('/mascotas', (req, res) => {
  res.status(200).json(mascotas);
});

// Ruta para obtener una mascota por su ID
app.get('/mascota/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const mascota = mascotas.find((m) => m.id === id);
  if (mascota) {
    res.status(200).json(mascota);
  } else {
    res.status(404).json({ mensaje: 'Mascota no encontrada' });
  }
});

// Ruta para agregar una nueva mascota
app.post('/mascota', (req, res) => {
  const nuevaMascota = req.body;
  nuevaMascota.id = mascotas.length + 1;
  mascotas.push(nuevaMascota);
  res.status(201).json(nuevaMascota);
});

// Ruta para actualizar una mascota por su ID
app.put('/mascota/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const mascotaExistente = mascotas.find((m) => m.id === id);
  if (mascotaExistente) {
    const datosActualizados = req.body;
    mascotaExistente.nombre = datosActualizados.nombre || mascotaExistente.nombre;
    mascotaExistente.tipo = datosActualizados.tipo || mascotaExistente.tipo;
    res.status(200).json(mascotaExistente);
  } else {
    res.status(404).json({ mensaje: 'Mascota no encontrada' });
  }
});

// Ruta para eliminar una mascota por su ID
app.delete('/mascota/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = mascotas.findIndex((m) => m.id === id);
  if (indice !== -1) {
    const mascotaEliminada = mascotas.splice(indice, 1)[0];
    res.status(200).json(mascotaEliminada);
  } else {
    res.status(404).json({ mensaje: 'Mascota no encontrada' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
