const fs = require('fs').promises;

console.log("Inicio de la eliminación del archivo (asíncrono)");

// Utilizamos fs.unlink para eliminar el archivo de forma asíncrona con promesas
fs.unlink('archivo.txt')
  .then(() => {
    console.log('Archivo eliminado con éxito');
  })
  .catch(error => {
    console.error('Error al eliminar el archivo:', error);
  })
  .finally(() => {
    console.log("Fin de la eliminación del archivo (asíncrono)");
  });
