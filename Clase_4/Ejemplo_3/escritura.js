const fs = require('fs');

try {
  fs.writeFileSync('archivo.txt', 'Contenido de ejemplo', 'utf8');
  console.log('Archivo escrito con éxito');
} catch (error) {
  console.error('Error al escribir en el archivo:', error);
}
