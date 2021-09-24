const { Post } = require("../models");
const authorization = async (req, res, next) => {
  const userId = req.user.id;
  const postId = +req.params.id;
  try {
    const foundPost = await Post.findByPk(postId);
    if (!foundPost) {
      res.status(404).json({ message: "Post not found" });
    } else {
      if (userId === foundPost.ProfileId) {
        next();
      } else {
        res.status(403).json({ message: "you dont have access" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = authorization;
