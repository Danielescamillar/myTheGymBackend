import mongoose, { Schema, Document } from 'mongoose';

export interface DailyDataDocument extends Document {
  id: string;
  exerciseId: string;
  series:number;
  load: number;
  repeticions: number;
  replaysInReserve: number;
  date: string;
}

const DailyDataSchema: Schema = new Schema({
  exerciseId: { type: String, required: true },
  series: { type: Number, required: true },
  load: { type: Number, required: true },
  repeticions: { type: Number, required: true },
  replaysInReserve: { type: Number, required: true },
  date: { type: String, required: true} // TODO: PENDIENTE POR EVALUAR
});

const DailyDataModel = mongoose.model<DailyDataDocument>('DailyData', DailyDataSchema);

export default DailyDataModel;
