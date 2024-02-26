// src/services/profileService.ts
import { Exercise } from '../models/exerciseModel';
import ExerciseModel, { ExerciseDocument } from '../db/models/exerciseModel';

export const getExercises= async (): Promise<Exercise[]> => {
  try {
    const exercises = await ExerciseModel.find();
    return exercises.map(mapToExercise);
  } catch (error: any) {
    throw new Error(`Failed to get Exercises: ${error.message}`);
  }
};


export const createExercise = async (body: string): Promise<Exercise | null> => {
  try {
    const exercise = await ExerciseModel.create(body);
    return exercise ? mapToExercise(exercise) : null;
  } catch (error: any) {
    throw new Error(`Failed to create exercise: ${error.message}`);
  }
};

// Function to map the mongoose document to a Profile object
const mapToExercise = (exercise: ExerciseDocument): Exercise => ({
  _id: exercise._id,
  name: exercise.name,
  muscularZone: exercise.muscularZone,
  description: exercise.description
});
