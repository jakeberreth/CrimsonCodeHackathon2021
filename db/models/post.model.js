//set up post schema

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        minLength: 1,
        trim: true
    },
    content: {
        type: String,
        require: true,
        minLength: 1,
        trim: true
    },
    _postId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

const Post = mongoose.model('Post', PostSchema);

module.exports = { Post }