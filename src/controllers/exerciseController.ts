// src/controllers/experienceController.ts
import { Request, Response } from 'express';
import * as exerciseService from '../services/exerciseService';

export const getExercises = async (req: Request, res: Response) => {
    const exercises = await exerciseService.getExercises();
    res.json(exercises);
};

export const createExercise = async (req: Request, res: Response) => {
    const body = req.body;
    const exercise = await exerciseService.createExercise(body);

    if (exercise) {
        res.status(201).json(exercise);
    } else {
        res.status(404).json({ message: 'Exercise not created' });
    }
};
