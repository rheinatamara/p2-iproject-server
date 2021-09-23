const { Post, Profile } = require("../models");
class PostController {
  static async addPost(req, res) {
    try {
      let posts = [];
      const { text, image_url } = req.body;
      for (let image of image_url) {
        posts.push({
          text,
          image_url: image,
          favourites_count: 0,
          ProfileId: req.user.id,
        });
      }
      const add = await Post.bulkCreate(posts, { returning: true });
      res.status(201).json(add);
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
  static async getById(req, res) {
    const id = req.params.id;
    try {
      const found = await Post.findByPk(id);
      if (found) {
        res.status(200).json(found);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = PostController;
