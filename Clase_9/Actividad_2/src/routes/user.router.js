import express from 'express';

const usersRouter = express.Router();

// Array para almacenar usuarios
const users = [];

usersRouter.get('/', (req, res) => {
    res.render('main');
});

usersRouter.post('/', (req, res) => {
    const { nombre, correo, contrasena } = req.body;

    // Guardar el usuario en el arreglo
    users.push({ nombre, correo, contrasena });

    // Puedes realizar otras acciones aquí, como validar los datos
    console.log(users);
    res.redirect('/');
});

export default usersRouter;
