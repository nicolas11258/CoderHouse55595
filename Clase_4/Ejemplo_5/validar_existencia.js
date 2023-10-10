const fs = require('fs').promises;

console.log("Comprobación de la existencia del archivo (asíncrono)");

// Utilizamos fs.access para comprobar la existencia del archivo de forma asíncrona con promesas
fs.access('archivo.txt', fs.constants.F_OK)
  .then(() => {
    console.log('El archivo existe');
  })
  .catch(error => {
    console.log('El archivo no existe');
  })
  .finally(() => {
    console.log("Fin de la comprobación (asíncrono)");
  });
