const { Post } = require("../models/postModel");

exports.getAllPosts = async (req, res, next) => {
    try {
        let posts = await Post.find();
        res.status(200).json({
            success: true,
            message: "Successfully retrieve the posts",
            data: posts
        })
    } catch (err) {
        next(err);
    }
}

exports.createPost = async (req, res, next) => {
    try {
        let obj = {};
        const { title } = req.body;
        if (title) obj.title = title;
        if (req.file && req.file.fieldname && req.file.path)
            obj.postImage = req.file.path;

        let post = await Post.create(obj);

        res.status(201).json({
            success: true,
            message: "Successfully created a post",
            data: post,
        });
    } catch (err) {
        next(err);
    }
};
