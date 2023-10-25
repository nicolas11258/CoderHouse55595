import express from 'express';
const petsRouter = express.Router();

// Array para almacenar mascotas
const pets = [];

// Ruta raíz para obtener mascotas
petsRouter.get('/', (req, res) => {
  res.status(200).json(pets);
});

// Ruta raíz para agregar una mascota
petsRouter.post('/', (req, res) => {
  const newPet = req.body;
  pets.push(newPet);
  res.status(201).json(newPet);
});

export { petsRouter };
