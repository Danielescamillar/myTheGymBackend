import { Request, Response } from 'express';
import * as dailyDataService from '../services/dailyDataService';

export const getDailyData = async (req: Request, res: Response) => {
    const dailyData = await dailyDataService.getDailyData();
    res.json(dailyData);
};

export const createDailyData = async (req: Request, res: Response) => {
    const body = req.body;
    const dailyData = await dailyDataService.createDailyData(body);

    if (dailyData) {
        res.status(201).json(dailyData);
    } else {
        res.status(404).json({ message: 'DailyData not created' });
    }
};
