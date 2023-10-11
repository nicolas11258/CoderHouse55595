//Sincronismo
console.log("1. Inicio de la carga de datos (sincronismo)");

function cargarDatosDesdeServidor() {
  const datos = "Datos cargados desde el servidor";
  return datos;
}

function procesarDatos(datos) {
  console.log("3. Procesando datos:", datos);
}

console.log("2. Solicitando datos al servidor");
const datosCargados = cargarDatosDesdeServidor();
procesarDatos(datosCargados);
console.log("4. Fin de la carga de datos (sincronismo)");
