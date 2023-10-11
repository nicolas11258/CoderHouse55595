const fs = require("fs");

class ManagerUsuarios {
    constructor() {
        this.usuarios = [];
    }

    crearUsuario(usuario) {
        const { nombre, apellido, edad, curso } = usuario;

        const nuevoUsuario = {
            nombre,
            apellido,
            edad,
            curso,
        };

        this.usuarios.push(nuevoUsuario);

        return fs.promises.writeFile("Usuarios.json", JSON.stringify(this.usuarios));
    }


    consultarUsuarios() {
    return fs.promises.readFile("Usuarios.json")
    .then((data) => JSON.parse(data))
    .then((usuarios) => console.log(usuarios));
    }
    }


const managerUsuarios = new ManagerUsuarios();


const usuario = {
nombre: "Juan",
apellido: "Perez",
edad: 25,
curso: "Ingeniería de Software",
};


managerUsuarios.crearUsuario(usuario);


managerUsuarios.consultarUsuarios();