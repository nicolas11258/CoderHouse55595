const fs = require('fs');

try {
  if (fs.existsSync('archivo.txt')) {
    console.log('El archivo existe');
  } else {
    console.log('El archivo no existe');
  }
} catch (error) {
  console.error('Error al comprobar la existencia del archivo:', error);
}
