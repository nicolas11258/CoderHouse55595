// Ejemplo de promesa simple
const miPromesa = new Promise((resolve, reject) => {
    const exito = false; // Cambiar a false para probar el caso de rechazo
  
    if (exito) {
      // Caso de resolución
      resolve("Operación exitosa");
    } else {
      // Caso de rechazo
      reject("La operación falló");
    }
  });
  
  // Utilizamos la promesa
  miPromesa
    .then((resultado) => {
      console.log("Éxito:", resultado);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  