import { DailyData } from '../models/dailyDataModel';
import DailyDataModel, { DailyDataDocument } from '../db/models/dailyDataModel';

export const getDailyData = async (): Promise<DailyData[]> => {
  try {
    const dailyData = await DailyDataModel.find();
    return dailyData.map(mapToDailyData);
  } catch (error: any) {
    throw new Error(`Failed to get Daily Data: ${error.message}`);
  }
};


export const createDailyData = async (body: string): Promise<DailyData | null> => {
  try {
    const dailyData = await DailyDataModel.create(body);
    return dailyData ? mapToDailyData(dailyData) : null;
  } catch (error: any) {
    throw new Error(`Failed to create Daily Data: ${error.message}`);
  }
};

// Function to map the mongoose document to a DailyData object
const mapToDailyData = (dailyData: DailyDataDocument): DailyData => ({
  _id: dailyData._id,
  exerciseId: dailyData.exerciseId,
  series: dailyData.series,
  load: dailyData.load,
  repeticions: dailyData.repeticions,
  replaysInReserve: dailyData.replaysInReserve,
  date: dailyData.date
});
