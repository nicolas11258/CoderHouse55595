const fs = require("fs");

class ManagerUsuarios {
    constructor() {
        this.usuarios = [];
    }

    async crearUsuario(usuario) {
        try {
            const { nombre, apellido, edad, curso } = usuario;

            const nuevoUsuario = {
                nombre,
                apellido,
                edad,
                curso,
            };

            this.usuarios.push(nuevoUsuario);

            await fs.promises.writeFile("Usuarios.json", JSON.stringify(this.usuarios));
            console.log("Usuario creado con éxito.");
        } catch (error) {
            console.error("Error al crear el usuario:", error);
        }
    }

    async consultarUsuarios() {
        try {
            const data = await fs.promises.readFile("Usuarios.json");
            const usuarios = JSON.parse(data);
            console.log("Usuarios registrados:", usuarios);
        } catch (error) {
            console.error("Error al consultar los usuarios:", error);
        }
    }
}

async function main() {
    const managerUsuarios = new ManagerUsuarios();

    const usuario = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25,
        curso: "Ingeniería de Software",
    };

    await managerUsuarios.crearUsuario(usuario);
    await managerUsuarios.consultarUsuarios();
}

main();
