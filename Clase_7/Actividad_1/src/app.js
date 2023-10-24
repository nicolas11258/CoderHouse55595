import express from 'express'
const app = express();
const port = 8080;

// Middleware para analizar el cuerpo de las solicitudes como datos codificados en formularios
app.use(express.urlencoded({ extended: true }));

// Middleware para analizar el cuerpo de las solicitudes como datos JSON
app.use(express.json());

// Frase inicial
let frase = 'Frase inicial';

// Ruta para obtener la frase completa
app.get('/api/frase', (req, res) => {
  res.status(200).json({ frase });
});

// Ruta para obtener una palabra en la posición dada
app.get('/api/palabras/:pos', (req, res) => {
  const pos = parseInt(req.params.pos);
  const palabras = frase.split(' ');
  
  if (pos >= 1 && pos <= palabras.length) {
    const palabra = palabras[pos - 1];
    res.status(200).json({ buscada: palabra });
  } else {
    res.status(404).json({ mensaje: 'Posición no válida' });
  }
});

// Ruta para agregar una palabra al final de la frase
app.post('/api/palabras', (req, res) => {
  const nuevaPalabra = req.body.palabra;
  frase += `${nuevaPalabra}`;
  const palabras = frase.split(' ');
  const pos = palabras.length;
  res.status(201).json({ agregada: nuevaPalabra, pos });
});

// Ruta para actualizar una palabra en la posición dada
app.put('/api/palabras/:pos', (req, res) => {
  const pos = parseInt(req.params.pos);
  const nuevaPalabra = req.body.palabra;
  const palabras = frase.split(' ');

  if (pos >= 1 && pos <= palabras.length) {
    const palabraAnterior = palabras[pos - 1];
    palabras[pos - 1] = nuevaPalabra;
    frase = palabras.join(' ');
    res.status(200).json({ actualizada: nuevaPalabra, anterior: palabraAnterior });
  } else {
    res.status(404).json({ mensaje: 'Posición no válida' });
  }
});

// Ruta para eliminar una palabra en la posición dada
app.delete('/api/palabras/:pos', (req, res) => {
  const pos = parseInt(req.params.pos);
  const palabras = frase.split('');

  if (pos >= 1 && pos <= palabras.length) {
    const palabraEliminada = palabras.splice(pos - 1, 1);
    frase = palabras.join(' ');
    res.status(200).json({ eliminada: palabraEliminada[0] });
  } else {
    res.status(404).json({ mensaje: 'Posición no válida' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});