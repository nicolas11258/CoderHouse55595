//setTimeout
console.log("Inicio de la carga de datos (setTimeout)");

function cargarDatosDesdeServidor(callback) {
  setTimeout(function() {
    const datos = "Datos cargados desde el servidor";
    callback(datos);
  }, 2000);
}

function procesarDatos(datos) {
  console.log("Procesando datos:", datos);
}

console.log("Solicitando datos al servidor");
cargarDatosDesdeServidor(procesarDatos);
console.log("Fin de la carga de datos (setTimeout)");
