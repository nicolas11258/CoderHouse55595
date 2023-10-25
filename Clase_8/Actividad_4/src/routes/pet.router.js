import express from 'express';
import { uploader } from '../utils.js'
const petsRouter = express.Router();

// Array para almacenar mascotas
const pets = [];

// Ruta raíz para obtener mascotas
petsRouter.get('/', (req, res) => {
  res.status(200).json(pets);
});

// Ruta raíz para agregar una mascota
petsRouter.post('/', uploader.single('file'), (req, res) => {
  const newPet = req.body;
  if (req.file) {
    newPet.thumbnail = req.file.filename;
  }

  pets.push(newPet);
  res.status(201).json(newPet);
});

export { petsRouter };
