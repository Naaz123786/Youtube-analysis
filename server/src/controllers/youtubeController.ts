import type { Request, Response } from 'express';
import { google } from 'googleapis';
import fs from 'fs';
import { oauth2Client, YOUTUBE_SCOPES } from '../config/youtube.js';
import YouTubeChannel from '../models/YouTubeChannel.js';
import { logger } from '../utils/logger.js';

// @desc    Get Google Auth URL
// @route   GET /api/youtube/auth
export const getAuthUrl = (req: Request, res: Response) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: YOUTUBE_SCOPES,
        prompt: 'consent',
    });
    res.json({ url });
};

// @desc    Google OAuth Callback
// @route   GET /api/youtube/callback
export const googleCallback = async (req: any, res: Response) => {
    const { code } = req.query;

    try {
        const { tokens } = await oauth2Client.getToken(code as string);
        oauth2Client.setCredentials(tokens);

        const youtube = google.youtube({ version: 'v3', auth: oauth2Client });
        const channelResponse = await youtube.channels.list({
            part: ['snippet', 'statistics'],
            mine: true,
        });

        const channelData = channelResponse.data.items?.[0];

        if (!channelData || !channelData.id) {
            return res.status(404).json({ message: 'No YouTube channel found' });
        }

        const { id, snippet, statistics } = channelData;

        // Save or update channel in DB
        const channel = await YouTubeChannel.findOneAndUpdate(
            { channelId: id },
            {
                owner: req.user._id,
                channelId: id,
                title: snippet?.title || 'Untitled',
                description: snippet?.description,
                thumbnails: {
                    default: snippet?.thumbnails?.default?.url,
                    medium: snippet?.thumbnails?.medium?.url,
                    high: snippet?.thumbnails?.high?.url,
                },
                accessToken: tokens.access_token || '',
                refreshToken: tokens.refresh_token || tokens.access_token || '',
                expiryDate: tokens.expiry_date || 0,
                stats: {
                    subscriberCount: parseInt(statistics?.subscriberCount || '0'),
                    viewCount: parseInt(statistics?.viewCount || '0'),
                    videoCount: parseInt(statistics?.videoCount || '0'),
                },
                lastSynced: new Date(),
            },
            { upsert: true, new: true }
        );

        // Redirect to frontend dashboard
        res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/dashboard?success=true`);
    } catch (error) {
        logger.error('Error in Google Callback');
        res.status(500).json({ message: 'Authentication failed' });
    }
};

// @desc    Get Channel Analytics
// @route   GET /api/youtube/analytics/:channelId
export const getChannelAnalytics = async (req: any, res: Response) => {
    const { channelId } = req.params;

    try {
        const channel = await YouTubeChannel.findOne({ channelId, owner: req.user._id });

        if (!channel) {
            return res.status(404).json({ message: 'Channel not found' });
        }

        oauth2Client.setCredentials({
            access_token: channel.accessToken,
            refresh_token: channel.refreshToken,
            expiry_date: channel.expiryDate,
        });

        const youtube = google.youtube({ version: 'v3', auth: oauth2Client });
        const response = await youtube.channels.list({
            part: ['statistics', 'snippet'],
            id: [channelId],
        });

        const stats = response.data.items?.[0]?.statistics;

        if (stats) {
            channel.stats = {
                subscriberCount: parseInt(stats.subscriberCount || '0'),
                viewCount: parseInt(stats.viewCount || '0'),
                videoCount: parseInt(stats.videoCount || '0'),
            };
            channel.lastSynced = new Date();
            await channel.save();
        }

        res.json(channel);
    } catch (error) {
        logger.error('Error fetching analytics');
        res.status(500).json({ message: 'Failed to fetch analytics' });
    }
};

// @desc    Upload Video
// @route   POST /api/youtube/upload
export const uploadVideo = async (req: any, res: Response) => {
    const { title, description, tags, channelId } = req.body;
    const videoFile = req.file;

    if (!videoFile) {
        return res.status(400).json({ message: 'No video file provided' });
    }

    try {
        const channel = await YouTubeChannel.findOne({ channelId, owner: req.user._id });

        if (!channel) {
            return res.status(404).json({ message: 'Channel not found' });
        }

        oauth2Client.setCredentials({
            access_token: channel.accessToken,
            refresh_token: channel.refreshToken,
        });

        const youtube = google.youtube({ version: 'v3', auth: oauth2Client });

        const response = await youtube.videos.insert({
            part: ['snippet', 'status'],
            requestBody: {
                snippet: {
                    title,
                    description,
                    tags: tags ? tags.split(',') : [],
                },
                status: {
                    privacyStatus: 'private',
                },
            },
            media: {
                body: fs.createReadStream(videoFile.path),
            },
        });

        fs.unlinkSync(videoFile.path);
        res.status(201).json({ message: 'Video uploaded successfully', data: response.data });
    } catch (error) {
        logger.error('Error uploading video');
        res.status(500).json({ message: 'Failed to upload video' });
    }
};
