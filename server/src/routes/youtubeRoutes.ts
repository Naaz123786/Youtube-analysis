import express from 'express';
import multer from 'multer';
import { getAuthUrl, googleCallback, getChannelAnalytics, uploadVideo } from '../controllers/youtubeController.js';
import { protect } from '../middleware/authMiddleware.js';

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.get('/auth', protect, getAuthUrl);
router.get('/callback', googleCallback);
router.get('/analytics/:channelId', protect, getChannelAnalytics);
router.post('/upload', protect, upload.single('video'), uploadVideo);

export default router;
