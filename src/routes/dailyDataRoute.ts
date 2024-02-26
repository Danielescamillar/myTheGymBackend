import express from 'express';
import * as dailyDataController from '../controllers/dailyDataController';

const router = express.Router();

router.get('/', dailyDataController.getDailyData);
router.post('/', dailyDataController.createDailyData);

export default router;
