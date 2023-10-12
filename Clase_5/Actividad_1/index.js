const _ = require('lodash');

// Función para generar números aleatorios en el rango de 1 a 20
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar 10,000 números aleatorios y almacenarlos en un array
const randomNumbers = [];
const numberOfRandomNumbers = 10000;

for (let i = 0; i < numberOfRandomNumbers; i++) {
  const randomNumber = generateRandomNumber(1, 20);
  randomNumbers.push(randomNumber);
}

// Contar la cantidad de veces que aparece cada número
const countByNumber = _.countBy(randomNumbers);

// Imprimir los resultados en la consola
console.log('Resultados:');
for (const number in countByNumber) {
  console.log(`Número ${number}: ${countByNumber[number]} veces.`);
}
