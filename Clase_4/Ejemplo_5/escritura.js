const fs = require('fs').promises;

console.log("Inicio de la escritura en el archivo (asíncrono)");

const contenido = 'Contenido de ejemplo';

// Utilizamos fs.writeFile para escribir en el archivo de forma asíncrona con promesas
fs.writeFile('archivo.txt', contenido, 'utf8')
  .then(() => {
    console.log('Archivo escrito con éxito');
  })
  .catch(error => {
    console.error('Error al escribir en el archivo:', error);
  })
  .finally(() => {
    console.log("Fin de la escritura en el archivo (asíncrono)");
  });
