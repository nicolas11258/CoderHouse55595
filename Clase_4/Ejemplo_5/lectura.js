const fs = require('fs').promises;

console.log("Inicio de la lectura del archivo (asíncrono)");

(async () => {
  try {
    const data = await fs.readFile('archivo.txt', 'utf8');
    console.log('Contenido del archivo:', data);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  } finally {
    console.log("Fin de la lectura del archivo (asíncrono)");
  }
})();
