import mongoose, { Schema, Document } from 'mongoose';

export interface ExerciseDocument extends Document {
  id:string;
  name: string;
  muscularZone:string;
  description: string;
}

const ExerciseSchema: Schema = new Schema({
  name: { type: String, required: true },
  muscularZone: { type: String, required: true },
  description: { type: String, required: true },
});

const ExerciseModel = mongoose.model<ExerciseDocument>('Exercise', ExerciseSchema);

export default ExerciseModel;
