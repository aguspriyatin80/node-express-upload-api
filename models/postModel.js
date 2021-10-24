const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    postImage: {
        type: String,
        default: "https://res.cloudinary.com/du4xfo1tl/image/upload/v1606562656/samples/cloudinary-icon.png",
    },

}, { timestamps: true, versionKey: false });

const post = mongoose.model("Post", postSchema);

exports.Post = post;
