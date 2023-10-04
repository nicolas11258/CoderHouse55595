// Ejemplo de uso del operador nullish (??)

// Variable que puede ser null o undefined
const nombre = null;

// Utilización del operador nullish para asignar un valor predeterminado
const nombreUsuario = nombre ?? 'Usuario anónimo';

// Mostrar el valor de nombreUsuario, que será 'Usuario anónimo' si nombre es null o undefined
console.log(nombreUsuario); // Resultado: 'Usuario anónimo'

/*
// Objeto que puede tener una propiedad `nombre` null o undefined
const usuario = {
  nombre: null,
};

// Utilización del operador nullish para acceder a la propiedad `nombre`
const nombreUsuario = usuario?.nombre;

// Mostrar el valor de nombreUsuario, que será null si la propiedad `nombre` es null o undefined
console.log(nombreUsuario); // Resultado: null
*/
