// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

// Función que ejecuta una operación utilizando un callback
function operacion(a, b, callback) {
    return callback(a, b);
}

// Ejemplos de uso con diferentes operaciones
console.log(operacion(5, 3, sumar)); // Resultado: 8
console.log(operacion(5, 3, restar)); // Resultado: 2
console.log(operacion(5, 3, multiplicar)); // Resultado: 15
console.log(operacion(6, 2, dividir)); // Resultado: 3
