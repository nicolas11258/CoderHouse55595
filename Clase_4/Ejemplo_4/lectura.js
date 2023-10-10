const fs = require('fs');

console.log("Inicio de la lectura del archivo (asíncrono)");

// Utilizamos fs.readFile para leer el archivo de forma asíncrona
fs.readFile('archivo.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error al leer el archivo:', error);
  } else {
    console.log('Contenido del archivo:', data);
  }
});

console.log("Fin de la lectura del archivo (asíncrono)");
