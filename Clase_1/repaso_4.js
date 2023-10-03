class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    obtenerInformacion(){
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }

    static saludar(){
        console.log("Hola desde la clase Persona");
    }
}

const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("Maria", 25);

// Forma 1: Llamando al método obtenerInformacion() de cada instancia y mostrando la información
console.log("Información de persona1:");
console.log(persona1.obtenerInformacion());

console.log("Información de persona2:");
console.log(persona2.obtenerInformacion());

// Forma 2: Llamando al método obtenerInformacion() de cada instancia directamente sin console.log
/*
console.log("Información de persona1:");
persona1.obtenerInformacion();

console.log("Información de persona2:");
persona2.obtenerInformacion();
*/

// Llamando al método estático saludar() de la clase Persona
Persona.saludar();
