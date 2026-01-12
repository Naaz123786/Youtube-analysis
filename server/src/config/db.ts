import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/youtube_analytics');
        logger.info(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        if (error instanceof Error) {
            logger.error(`Error: ${error.message}`);
        } else {
            logger.error('An unknown error occurred during database connection');
        }
        process.exit(1);
    }
};

export default connectDB;
