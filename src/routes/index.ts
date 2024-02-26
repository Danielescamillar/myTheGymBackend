import express from 'express';
import dailyDataRoute from './dailyDataRoute';
import exerciseRoute from './exerciseRoute';

const router = express.Router();

router.use('/api/dailyData', dailyDataRoute);
router.use('/api/exercise', exerciseRoute);

export default router;
