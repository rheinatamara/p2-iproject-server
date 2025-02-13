const router = require("express").Router();
const PostController = require("../controllers/postController");
const authorization = require("../middlewares/authorization");
const uploadFiles = require("../middlewares/multer");
const imageKit = require("../middlewares/imageKit");
router.post("/posts", uploadFiles, imageKit, PostController.addPost);
router.delete("/posts/:id", authorization, PostController.deletePost);
router.get("/posts/:id", PostController.getById);
router.get("/posts", PostController.getAllPosts);

module.exports = router;
