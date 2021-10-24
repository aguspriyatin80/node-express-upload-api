const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");
const multer = require("../middlewares/multer");

router.get("/", postController.getAllPosts);
router.post("/", multer.single("postImage"), postController.createPost);

module.exports = router;
