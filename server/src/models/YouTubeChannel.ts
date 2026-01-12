import mongoose, { Schema, Document } from 'mongoose';

export interface IYouTubeChannel extends Document {
    owner: mongoose.Types.ObjectId;
    channelId: string;
    title: string;
    description?: string;
    thumbnails?: {
        default?: string;
        medium?: string;
        high?: string;
    };
    accessToken: string;
    refreshToken: string;
    expiryDate: number;
    stats?: {
        subscriberCount: number;
        viewCount: number;
        videoCount: number;
    };
    lastSynced: Date;
}

const YouTubeChannelSchema: Schema = new Schema(
    {
        owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        channelId: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        description: { type: String },
        thumbnails: {
            default: { type: String },
            medium: { type: String },
            high: { type: String },
        },
        accessToken: { type: String, required: true },
        refreshToken: { type: String, required: true },
        expiryDate: { type: Number, required: true },
        stats: {
            subscriberCount: { type: Number, default: 0 },
            viewCount: { type: Number, default: 0 },
            videoCount: { type: Number, default: 0 },
        },
        lastSynced: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

export default mongoose.model<IYouTubeChannel>('YouTubeChannel', YouTubeChannelSchema);
