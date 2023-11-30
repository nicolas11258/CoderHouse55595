import express from 'express';

const router = express.Router();

router.get('/register', (req, res) => {
    res.send('Formulario de registro');
});

export default router;
