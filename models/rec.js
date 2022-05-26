const mongoose = require('mongoose');

const recSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    audioUrl: String,
    title: String,
    description: String
})

module.exports = mogoose.model('Rec', recSchema)