const fs = require('fs').promises;

console.log("Inicio de la lectura del archivo (asíncrono)");

// Utilizamos fs.readFile para leer el archivo de forma asíncrona con promesas
fs.readFile('archivo.txt', 'utf8')
  .then(data => {
    console.log('Contenido del archivo:', data);
  })
  .catch(error => {
    console.error('Error al leer el archivo:', error);
  })
  .finally(() => {
    console.log("Fin de la lectura del archivo (asíncrono)");
  });
