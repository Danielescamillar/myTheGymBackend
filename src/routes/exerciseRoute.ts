import express from 'express';
import * as exerciseController from '../controllers/exerciseController';

const router = express.Router();

router.get('/', exerciseController.getExercises);
router.post('/', exerciseController.createExercise);

export default router;
