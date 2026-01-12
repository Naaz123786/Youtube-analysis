import express from 'express';
import type { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { logger } from './utils/logger.js';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import youtubeRoutes from './routes/youtubeRoutes.js';

dotenv.config();

// Connect to Database
connectDB();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/youtube', youtubeRoutes);

// Basic Route
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'YouTube Analytics API is running' });
});

// Start Server
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
