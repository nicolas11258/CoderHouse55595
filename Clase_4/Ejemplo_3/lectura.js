const fs = require('fs');

try {
  const data = fs.readFileSync('archivo.txt', 'utf8');
  console.log(data);
} catch (error) {
  console.error('Error al leer el archivo:', error);
}
