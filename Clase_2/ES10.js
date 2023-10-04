// Ejemplo 1: Eliminando espacios en blanco de una cadena

// Definir una cadena que contiene espacios en blanco al principio y al final
const cadena = "   Bienvenido al mundo de JavaScript!   ";

// Utilizar el método replace con una expresión regular para eliminar todos los espacios en blanco
const cadenaSinEspacios = cadena.replace(/\s/g, "");

// Mostrar la cadena resultante sin espacios en blanco
console.log(cadenaSinEspacios); // Resultado: "BienvenidoalmundodeJavaScript!"

/*
// Ejemplo 2: Eliminando espacios en blanco al principio y al final de una cadena

// Definir una cadena que contiene espacios en blanco al principio y al final
const cadena = "   Bienvenido al mundo de JavaScript!   ";

// Utilizar el método trim para eliminar los espacios en blanco al principio y al final de la cadena
const cadenaTrimmed = cadena.trim();

// Mostrar la cadena resultante sin espacios en blanco al principio y al final
console.log(cadenaTrimmed); // Resultado: "Bienvenido al mundo de JavaScript!"
*/

// Ejemplo 3: Aplanando un array anidado

// Definir un array anidado
const arrayAnidado = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Utilizar el método flat para aplanar el array anidado
const arrayAplanado = arrayAnidado.flat();

// Mostrar el array resultante aplanado
console.log(arrayAplanado); // Resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9]
