import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    username: String,
    password: String,
    token: String,
});

export const users = mongoose.model('users', schema);
