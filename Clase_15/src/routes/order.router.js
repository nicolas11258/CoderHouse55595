import express from 'express';
import Order from '../models/order.model.js';

const router = express.Router();

// Obtener todos los pedidos
router.get('/', async (req, res) => {
  try {
    const pedidos = await Order.find();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Agregar un nuevo pedido
router.post('/', async (req, res) => {
  const order = new Order(req.body);
  try {
    const nuevoPedido = await order.save();
    res.status(201).json(nuevoPedido);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Actualizar un pedido por ID
router.put('/:id', async (req, res) => {
	try {
		const pedido = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!pedido) {
			return res.status(404).json({ message: 'Pedido no encontrado' });
		}
		res.json(pedido);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
  
// Eliminar un pedido por ID
router.delete('/:id', async (req, res) => {
	try {
		const pedido = await Order.findByIdAndDelete(req.params.id);
		if (!pedido) {
			return res.status(404).json({ message: 'Pedido no encontrado' });
		}
		res.json({ message: 'Pedido eliminado exitosamente' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export default router;
  
