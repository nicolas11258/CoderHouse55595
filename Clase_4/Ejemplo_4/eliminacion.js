const fs = require('fs');

console.log("Inicio de la eliminación del archivo (asíncrono)");

// Utilizamos fs.unlink para eliminar el archivo de forma asíncrona
fs.unlink('archivo.txt', (error) => {
  if (error) {
    console.error('Error al eliminar el archivo:', error);
  } else {
    console.log('Archivo eliminado con éxito');
  }
});

console.log("Fin de la eliminación del archivo (asíncrono)");
