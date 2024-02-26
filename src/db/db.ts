import mongoose from 'mongoose';

const dbConnect = (): void => {
  const dbUri: string | undefined = process.env.DB_URI;

  if (!dbUri) {
    console.error('DB_URI not defined in environment variables');
    return;
  }

  mongoose.set('strictQuery', true);
  mongoose.connect(dbUri);

  const db = mongoose.connection;

  db.on('error', (err) => console.error('Failed Data Base conection❌:', err));
  db.once('open', () => {
    console.log('MongoDB connected ✅');
  });
};

export default dbConnect;
