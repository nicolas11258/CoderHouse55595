import express from 'express';
import { fork } from 'child_process';

const app = express();
const PORT = 3000;

let visitCount = 0;

// Ruta raíz para contar visitas
app.get('/', (req, res) => {
  visitCount++;
  res.send(`Visitas totales: ${visitCount}`);
});

// Ruta para realizar un cálculo bloqueante
app.get('/calculo-bloq', (req, res) => {
  // Algoritmo de suma incremental del 0 al 100000
  let result = 0;
  for (let i = 0; i <= 100000; i++) {
    result += i;
  }

  res.send(`Resultado del cálculo bloqueante: ${result}`);
});

// Ruta para realizar un cálculo no bloqueante (fork en un child process)
app.get('/calculo-nobloq', (req, res) => {
  const childProcess = fork('./calculo-nobloq.js'); // Asegúrate de tener un script llamado calculo-nobloq.js

  childProcess.on('message', (result) => {
    res.send(`Resultado del cálculo no bloqueante: ${result}`);
  });

  childProcess.on('exit', () => {
    console.log('Child process finished');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
