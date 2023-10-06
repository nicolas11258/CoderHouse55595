// Utilizaremos este arreglo de prueba
let valoresOriginales = [1, 3, 5, 7, 9];

// Función de callback que evalúa si un número es mayor o igual a 5
const evaluarNumero = (valor) => {
    if (valor >= 5) {
        return "Es mayor o igual a 5";
    } else {
        return "Es menor que 5";
    }
}

// Utilizamos map y pasamos la función de callback como argumento
const evaluacionDeNumeros = valoresOriginales.map(evaluarNumero);

console.log(evaluacionDeNumeros); // El resultado será: ["Es menor que 5", "Es menor que 5", "Es mayor o igual a 5", "Es mayor o igual a 5", "Es mayor o igual a 5"]
