const fs = require('fs');

// Obtener la fecha y hora actual
const fechaHoraActual = new Date().toLocaleString();

// Crear un archivo y escribir la fecha y hora en él
fs.writeFile('fecha-hora.txt', fechaHoraActual, 'utf8', (error) => {
  if (error) {
    console.error('Error al escribir en el archivo:', error);
  } else {
    console.log('Archivo creado y datos escritos con éxito.');
    
    // Leer el archivo y mostrar su contenido
    fs.readFile('fecha-hora.txt', 'utf8', (error, data) => {
      if (error) {
        console.error('Error al leer el archivo:', error);
      } else {
        console.log('Contenido del archivo:');
        console.log(data);
      }
    });
  }
});
