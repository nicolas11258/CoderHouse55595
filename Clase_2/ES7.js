const numeros = [2, 3, 4, 5, 6];

// Utilización del operador exponencial
const resultado = numeros.map((numero) => numero ** 3);

// Manejo de array con includes
const contieneDos = numeros.includes(2);
const contieneCinco = numeros.includes(5);

console.log(resultado); // [4, 9, 16, 25, 36]
console.log(contieneDos); // true
console.log(contieneCinco); // true
