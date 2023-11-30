import userModel from "../models/user.model.js";

export const registerUser = async (req, res) => {
    try {
        // Lógica para registrar un usuario en la base de datos
        const { first_name, last_name, email, age, password } = req.body;
        const user = new userModel({ first_name, last_name, email, age, password });
        await user.save();
        res.send('Usuario registrado exitosamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar usuario');
    }
};

export const loginUser = async (req, res) => {
    try {
        // Lógica para autenticar al usuario y crear la sesión
        const { email, password } = req.body;
        // Implementa la lógica de autenticación aquí
        // ...
        res.send('Usuario autenticado exitosamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al autenticar usuario');
    }
};
