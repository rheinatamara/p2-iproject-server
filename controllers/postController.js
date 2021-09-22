const { Post, Profile } = require("../models");
class PostController {
  static async addPost(req, res) {
    try {
      const { text, image_url } = req.body;
      const result = await Post.create({
        text,
        image_url,
        favourites_count: 0,
        ProfileId: req.user.id,
      });
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  static async deletePost(req, res) {
    const id = +req.params.id;
    try {
      const found = await Post.findByPk(id);
      if (found) {
        const data = await Post.destroy({
          where: { id },
        });
        res.status(200).json({ message: "your post has been deleted" });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = PostController;
