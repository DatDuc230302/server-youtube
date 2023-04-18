import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    content: String,
    img: String,
    avatar: String,
    name: String,
    check: Boolean,
    views: String,
    time: String,
    link: String,
    type: String,
    subscriber: String,
    likes: String,
    description: String,
});

export const watches = mongoose.model('watches', schema);
