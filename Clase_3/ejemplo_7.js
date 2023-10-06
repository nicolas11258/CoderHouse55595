// Ejemplo de código asíncrono con setTimeout
console.log("Inicio del programa");

function procesoAsincrono() {
  setTimeout(() => {
    console.log("Paso asíncrono");
  }, 2000); // Espera 2 segundos antes de ejecutar la función
}

procesoAsincrono();

console.log("Fin del programa");
