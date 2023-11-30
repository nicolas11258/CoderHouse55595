import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Formulario de inicio de sesión');
});

export default router;
