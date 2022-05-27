const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId }
})

const recSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    audioUrl: String,
    title: String,
    description: String,
    likes: [likesSchema]
})

module.exports = mongoose.model('Rec', recSchema)