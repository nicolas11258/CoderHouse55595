import express from 'express';
import { showProfile } from '../../controllers/userController.js';

const router = express.Router();

router.get('/profile', showProfile);

export default router;
