// Ejemplo de uso del operador de propagación (Spread Operator)
// Se utiliza para expandir arrays en otros arrays
const arr1 = [1, 2, 3, 2];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

//Si deseas evitar duplicados en un array, puedes utilizar 
//el operador de propagación (...) junto con el constructor 
//Set para crear un conjunto (Set) que automáticamente eliminará los duplicados.

//const combinedArray = [...new Set([...arr1, ...arr2])];

console.log(combinedArray); // Resultado: [1, 2, 3, 4, 5, 6]


// Ejemplo de uso del operador de reunión (Rest Operator)
// Se utiliza para recoger argumentos restantes en una función como un array
function sumar(...numeros) {
  let total = 0;
  for (const numero of numeros) {
    total += numero;
  }
  return total;
}

console.log(sumar(1, 2, 3, 4, 5)); // Resultado: 15
