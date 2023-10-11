const fs = require('fs');

console.log("Inicio de la escritura en el archivo (asíncrono)");

const contenido = 'Contenido de ejemplo';

// Utilizamos fs.writeFile para escribir en el archivo de forma asíncrona
fs.writeFile('archivo.txt', contenido, 'utf8', (error) => {
  if (error) {
    console.error('Error al escribir en el archivo:', error);
  } else {
    console.log('Archivo escrito con éxito');
  }
});

console.log("Fin de la escritura en el archivo (asíncrono)");
