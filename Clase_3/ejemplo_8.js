// Función que realiza una división y devuelve una promesa
const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            // Si el divisor es 0, rechazamos la promesa con un mensaje de error
            reject('No se pueden hacer divisiones entre cero');
        } else {
            // Si el divisor no es 0, resolvemos la promesa con el resultado de la división
            resolve(dividendo / divisor);
        }
    });
}

// Función asíncrona que utiliza la función dividir con async/await
const dividirAsync = async (a, b) => {
    try {
        // Utilizamos await para esperar la resolución de la promesa
        const resultado = await dividir(a, b);
        console.log('Resultado:', resultado); // Se ejecuta cuando la promesa se resuelve con éxito
    } catch (error) {
        console.error('Error:', error); // Se ejecuta cuando la promesa es rechazada
    }
}

// Llamamos a la función dividirAsync para ejecutarla
dividirAsync(6,2);
