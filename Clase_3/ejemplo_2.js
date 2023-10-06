// Definimos una función de callback que toma un parámetro n1 y lo muestra en la consola
const fn_callback = (n1) => {
    console.log(`Se invoca el callback y llega con valor = ${n1}`);
  };
  
  // Definimos una función llamada "inicio" que toma dos parámetros: param1 y callback
  const inicio = (param1, callback) => {
    // Comprobamos si param1 es igual a 1
    if (param1 === 1) {
      // Si param1 es igual a 1, llamamos al callback y pasamos param1 como argumento
      callback(param1);
    } else {
      // Si param1 no es igual a 1, mostramos un mensaje en la consola
      console.log(`${param1}: no es igual a 1`);
    }
  };
  
  // Llamamos a la función "inicio" y le pasamos 1 como valor para param1 y "fn_callback" como callback
  inicio(1, fn_callback);
  