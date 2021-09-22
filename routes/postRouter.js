const router = require("express").Router();
const PostController = require("../controllers/postController");
const authorization = require("../middlewares/authorization");
router.post("/posts", PostController.addPost);
router.delete("/posts/:id", authorization, PostController.deletePost);

module.exports = router;
