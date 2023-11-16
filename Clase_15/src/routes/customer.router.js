import express from 'express';
import Customer from '../models/customer.model.js';

const router = express.Router();

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Customer.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Agregar un nuevo cliente
router.post('/', async (req, res) => {
  const customer = new Customer(req.body);
  try {
    const nuevoCliente = await customer.save();
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Actualizar un cliente por ID
router.put('/:id', async (req, res) => {
  try {
    const cliente = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Eliminar un cliente por ID
/*router.delete('/:id', async (req, res) => {
  try {
    const cliente = await Customer.findByIdAndDelete(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json({ message: 'Cliente eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});*/

export default router;
