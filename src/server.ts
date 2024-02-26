import express from 'express';
import cors from 'cors';
import routes from './routes';
import dbConnect from './db/db';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT} 🚀`);
});

dbConnect()