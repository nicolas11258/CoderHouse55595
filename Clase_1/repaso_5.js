// Definición de la clase Contador
class Contador {
    // Constructor de la clase que recibe un nombre como parámetro
    constructor(nombre){
        // Inicialización de propiedades de la instancia
        this.nombre = nombre;
        this.valor = 0;

        // Incremento del contador global en cada creación de instancia
        Contador.contadorGlobal++;
    }

    // Método para incrementar el valor del contador de la instancia
    incrementar(){
        this.valor++;
    }

    // Método para obtener el valor actual del contador de la instancia
    obtenerValor(){
        return this.valor;
    }

    // Método estático para obtener el contador global de todas las instancias
    static obtenerContadorGlobal(){
        return Contador.contadorGlobal;
    }
}

// Inicialización del contador global como una propiedad estática de la clase Contador
Contador.contadorGlobal = 0;

// Creación de dos instancias de Contador
const contador1 = new Contador("Responsable 1");
const contador2 = new Contador("Responsable 2");

// Incremento de los contadores de las instancias
contador1.incrementar();
contador2.incrementar();
contador2.incrementar();

// Mostrar información por consola
console.log(`${contador1.nombre}: ${contador1.obtenerValor()}`);
console.log(`${contador2.nombre}: ${contador2.obtenerValor()}`);

// Mostrar el contador global por consola
console.log(`Contador global: ${Contador.contadorGlobal}`);
