import express from 'express'
const usersRouter = express.Router();

// Array para almacenar usuarios
const users = [];

// Ruta raíz para obtener usuarios
usersRouter.get('/', (req, res) => {
  res.status(200).json(users);
});

// Ruta raíz para agregar un usuario
usersRouter.post('/', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = usersRouter;
