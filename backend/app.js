import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app = express();
const apiPrefix = '/api';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));
app.use(apiPrefix, router);

export default app;
