const fs = require('fs');

try {
  fs.unlinkSync('archivo.txt');
  console.log('Archivo eliminado con éxito');
} catch (error) {
  console.error('Error al eliminar el archivo:', error);
}
