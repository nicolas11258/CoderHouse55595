const moment = require('moment');

// Variable que almacena la fecha actual
const fechaActual = moment();

// Variable que almacena tu fecha de nacimiento
const fechaNacimiento = moment('1990-01-31'); // Cambia esta fecha a tu fecha de nacimiento

// Validar si la fecha de nacimiento es válida
if (fechaNacimiento.isValid()) {
  // Calcular la diferencia de días entre la fecha actual y la fecha de nacimiento
  const diasDiferencia = fechaActual.diff(fechaNacimiento, 'days');

  console.log(`Han pasado ${diasDiferencia} días desde tu nacimiento hasta hoy.`);
} else {
  console.log('La fecha de nacimiento no es válida.');
}
