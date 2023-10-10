const fs = require('fs').promises;
const { exec } = require('child_process');

// Función asincrónica para realizar las operaciones
async function procesarPackageJSON() {
  try {
    // Paso 1: Ejecutar npm init -y en la terminal
    const initProcess = exec('npm init -y');

    initProcess.on('exit', (code) => {
      if (code !== 0) {
        throw new Error('Error al ejecutar npm init -y');
      }

      // Paso 2: Leer el archivo package.json
      fs.readFile('package.json', 'utf8')
        .then((packageJSON) => {
          // Paso 3: Crear el objeto info
          const info = {
            contenidoStr: packageJSON,
            contenidoObj: JSON.parse(packageJSON)
          };

          // Paso 4: Mostrar el objeto info por consola
          console.log(info);

          // Paso 5: Guardar el objeto info en un archivo info.json
          return fs.writeFile('info.json', JSON.stringify(info, null, 2), 'utf8');
        })
        .then(() => {
          console.log('Objeto info guardado en info.json con éxito.');
        })
        .catch((error) => {
          throw new Error('Ocurrió un error al procesar el archivo package.json: ' + error.message);
        });
    });
  } catch (error) {
    throw new Error('Ocurrió un error al procesar el archivo package.json: ' + error.message);
  }
}

// Ejecutar la función asincrónica
procesarPackageJSON()
  .catch((error) => {
    console.error(error.message);
  });
