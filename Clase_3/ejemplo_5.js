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

// Llamamos a la función dividir con 6 como dividendo y 2 como divisor
dividir(6, 2)
    .then((resultado) => {
        // El método then se ejecuta cuando la promesa se resuelve con éxito
        console.log('Resultado:', resultado); // Resultado: 3
    })
    .catch((error) => {
        // El método catch se ejecuta cuando la promesa es rechazada
        console.error('Error:', error); // No se ejecutará en este caso
    });
