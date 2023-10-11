const fs = require('fs').promises;

console.log("Inicio de la escritura en el archivo (asíncrono)");

(async () => {
  try {
    const contenido = 'Contenido de ejemplo';
    await fs.writeFile('archivo.txt', contenido, 'utf8');
    console.log('Archivo escrito con éxito');
  } catch (error) {
    console.error('Error al escribir en el archivo:', error);
  } finally {
    console.log("Fin de la escritura en el archivo (asíncrono)");
  }
})();
