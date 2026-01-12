import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password?: string;
    name: string;
    googleId?: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String },
        name: { type: String, required: true },
        googleId: { type: String },
        avatar: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model<IUser>('User', UserSchema);
