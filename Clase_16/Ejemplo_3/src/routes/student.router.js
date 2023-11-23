import express from 'express';
import Student from '../models/student.model.js';

const router = express.Router();
 
// Obtener todas las categorías
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});