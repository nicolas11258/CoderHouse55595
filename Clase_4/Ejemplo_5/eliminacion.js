const fs = require('fs').promises;

console.log("Inicio de la eliminación del archivo (asíncrono)");

(async () => {
  try {
    await fs.unlink('archivo.txt');
    console.log('Archivo eliminado con éxito');
  } catch (error) {
    console.error('Error al eliminar el archivo:', error);
  } finally {
    console.log("Fin de la eliminación del archivo (asíncrono)");
  }
})();
