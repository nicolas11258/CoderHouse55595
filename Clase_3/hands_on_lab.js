// Función para realizar una suma y devolver una promesa
const suma = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) {
            // Si alguno de los números es 0, rechazamos la promesa con un mensaje de error
            reject('Operación innecesaria');
        }
        if (numero1 + numero2 < 0) {
            // Si la suma es negativa, rechazamos la promesa con otro mensaje de error
            reject('La calculadora sólo debe devolver valores positivos');
        }
        // Si no hay errores, resolvemos la promesa con el resultado de la suma
        resolve(numero1 + numero2);
    });
}

// Función para realizar una resta y devolver una promesa
const resta = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) {
            // Si alguno de los números es 0, rechazamos la promesa con un mensaje de error
            reject('Operación inválida');
        }
        if (numero1 - numero2 < 0) {
            // Si la resta es negativa, rechazamos la promesa con otro mensaje de error
            reject('La calculadora sólo debe devolver valores positivos');
        }
        // Si no hay errores, resolvemos la promesa con el resultado de la resta
        resolve(numero1 - numero2);
    });
}

// Función para realizar una multiplicación y devolver una promesa
const multiplicacion = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 < 0 || numero2 < 0) {
            // Si alguno de los números es negativo, rechazamos la promesa con un mensaje de error
            reject('La calculadora sólo debe tener valores positivos');
        }
        // Si no hay errores, resolvemos la promesa con el resultado de la multiplicación
        resolve(numero1 * numero2);
    });
}

// Función para realizar una división y devolver una promesa
const division = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero2 === 0) {
            // Si el divisor es 0, rechazamos la promesa con un mensaje de error
            reject('No se puede dividir entre 0');
        }
        // Si no hay errores, resolvemos la promesa con el resultado de la división
        resolve(numero1 / numero2);
    });
}

// Función que realiza varios cálculos usando async/await
const calculos = async () => {
    try {
        let numero1 = 5;
        let numero2 = 3;
        // Realizamos cada operación de manera asíncrona y esperamos los resultados
        let resultSuma = await suma(numero1, numero2);
        console.log('Resultado Suma:', resultSuma);
        let resultResta = await resta(numero1, numero2);
        console.log('Resultado Resta:', resultResta);
        let resultMultiplicacion = await multiplicacion(numero1, numero2);
        console.log('Resultado Multiplicación:', resultMultiplicacion);
        let resultDivision = await division(numero1, numero2);
        console.log('Resultado División:', resultDivision);
    } catch (error) {
        // Capturamos cualquier error que pueda ocurrir durante los cálculos
        console.log('Error:', error);
    }
}

// Llamamos a la función calculos para ejecutarla
calculos();
