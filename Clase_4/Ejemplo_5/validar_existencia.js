const fs = require('fs').promises;

console.log("Comprobación de la existencia del archivo (asíncrono)");

(async () => {
  try {
    await fs.access('archivo.txt', fs.constants.F_OK);
    console.log('El archivo existe');
  } catch (error) {
    console.log('El archivo no existe');
  } finally {
    console.log("Fin de la comprobación (asíncrono)");
  }
})();
