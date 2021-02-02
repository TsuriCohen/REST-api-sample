const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    creatorName: {
        //type: Schema.Types.ObjectId,
        type: String,
        ref: 'User',
        required: false
    }
}, { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);