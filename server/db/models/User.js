import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    markers: {
        type: Array
    }
});

export const User = mongoose.model('User', UserSchema);