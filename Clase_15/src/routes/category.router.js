import express from 'express';
import Category from '../models/category.model.js';

const router = express.Router();
 
// Obtener todas las categorías
router.get('/', async (req, res) => {
  try {
    const categorias = await Category.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Agregar una nueva categoría
router.post('/', async (req, res) => {
  const category = new Category(req.body);
  try {
    const nuevaCategoria = await category.save();
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Actualizar una categoría por ID
router.put('/:id', async (req, res) => {
	try {
		const categoria = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!categoria) {
			return res.status(404).json({ message: 'Categoría no encontrada' });
		}
		res.json(categoria);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
  
  // Eliminar una categoría por ID
/*router.delete('/:id', async (req, res) => {
	try {
		const categoria = await Category.findByIdAndDelete(req.params.id);
		if (!categoria) {
			return res.status(404).json({ message: 'Categoría no encontrada' });
		}
		res.json({ message: 'Categoría eliminada exitosamente' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});*/
  
export default router;
