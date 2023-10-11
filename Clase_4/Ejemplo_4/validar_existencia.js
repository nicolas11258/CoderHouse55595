const fs = require('fs');

console.log("Comprobación de la existencia del archivo (asíncrono)");

// Utilizamos fs.access para comprobar la existencia del archivo de forma asíncrona
fs.access('archivo.txt', fs.constants.F_OK, (error) => {
  if (error) {
    console.log('El archivo no existe');
  } else {
    console.log('El archivo existe');
  }
});

console.log("Fin de la comprobación (asíncrono)");
