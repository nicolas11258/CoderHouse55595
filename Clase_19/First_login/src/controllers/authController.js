import userModel from "../models/user.model.js";

const registerUser = async (req, res) => {
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

const loginUser = (req, res) => {
    // Lógica para autenticar al usuario y crear la sesión
    const { email, password } = req.body;
    res.send('Usuario autenticado exitosamente');
};