import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 8000;

try {
  await mongoose.connect(process.env.SCORETRACKER_DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(port, () => console.log(`Server is running on port ${port}`));
} catch (err) {
  console.error(err);
  process.exit();
}
