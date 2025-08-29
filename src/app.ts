import 'reflect-metadata'; 
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import albumRoutes from './modules/Albums/album.route';
import dotenv from "dotenv";
import { globalLimiter } from './utils/rateLimit';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use(globalLimiter);
app.use('/api/albums', albumRoutes);

export default app;