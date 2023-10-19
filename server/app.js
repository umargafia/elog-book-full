import express, { json } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import StudentRouter from './routes/studetRoute.js';
import StaffRouter from './routes/staffRoute.js';

// imports

const app = express();
app.use(cors());
app.use(json());
app.use(cookieParser());

app.use('/api/students', StudentRouter);
app.use('/api/staff', StaffRouter);

export default app;
