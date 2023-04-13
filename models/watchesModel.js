import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    content: String,
    name: String,
    check: Boolean,
    views: String,
    time: String,
    type: String,
    link: String,
    subscriber: String,
    likes: String,
    description: String,
});

export const watches = mongoose.model('watches', schema);
