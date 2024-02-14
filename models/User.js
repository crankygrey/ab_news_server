import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: 'username is required',
            max: 25,
        },
        password: {
            type: String,
            required: 'password is required',
            select: false,
            max: 25,
        },
    },
    { timestamps: true }
);

export default mongoose.model('User', UserSchema);
