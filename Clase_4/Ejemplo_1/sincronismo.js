//Sincronismo
console.log("Inicio de la carga de datos (sincronismo)");

function cargarDatosDesdeServidor() {
  const datos = "Datos cargados desde el servidor";
  return datos;
}

function procesarDatos(datos) {
  console.log("Procesando datos:", datos);
}

console.log("Solicitando datos al servidor");
const datosCargados = cargarDatosDesdeServidor();
procesarDatos(datosCargados);
console.log("Fin de la carga de datos (sincronismo)");
