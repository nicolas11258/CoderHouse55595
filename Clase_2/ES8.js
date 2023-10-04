const usuario = {
    nombre: "Juan",
    edad: 30
  };
  
  // Utilizar el método Object.entries para obtener un array de pares clave-valor
  const entradas = Object.entries(usuario);
  
  // Iterar a través de las entradas usando un bucle for...of y mostrarlas en la consola
  for (const [clave, valor] of entradas) {
    console.log(`${clave}: ${valor}`);
  }
  
  // Utilizar el método Object.values para obtener un array de los valores del objeto
  const valores = Object.values(usuario);
  
  // Mostrar los valores en la consola
  console.log(valores); // ["Juan", 30]
  
  // Utilizar el método Object.keys para obtener un array de las claves del objeto
  const claves = Object.keys(usuario);
  
  // Mostrar las claves en la consola
  console.log(claves); // ["nombre", "edad"]
  