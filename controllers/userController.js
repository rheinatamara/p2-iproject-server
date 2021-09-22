const { User, Profile } = require("../models");
const { decode } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jwt");
class UserController {
  static async register(req, res) {
    const { fullName, username, location, password } = req.body;
    try {
      const created = await User.create({
        fullName,
        username,
        location,
        password,
      });
      if (created) {
        await Profile.create({
          UserId: created.id,
          default_profile_image: true,
          profile_use_background_image: false,
          followers_count: 0,
          following: 0,
        });
        res.status(201).json({
          fullName: created.fullName,
          username: created.username,
          location: created.location,
        });
      } else {
        res.status(400).json({ message: "cannot create an account" });
      }
    } catch (error) {
      let code = error.code || 500;
      let message = error.message || "Internal Server Error";
      if (error.name === "SequelizeUniqueConstraintError") {
        code = 400;
        message = error.message;
      }
      res.status(code).json({ message });
    }
  }
  static async login(req, res) {
    const { username, password } = req.body;
    try {
      const found = await User.findOne({
        where: {
          username,
        },
      });
      if (found) {
        const isMatch = decode(password, found.password);
        if (isMatch) {
          const access_token = sign({
            id: found.id,
            username: found.username,
          });
          res.status(200).json({
            access_token: access_token,
            fullName: found.fullName,
            username: found.username,
            location: found.location,
          });
        } else {
          res.status(404).json({ message: "Invalid Email / Password" });
        }
      } else {
        res.status(404).json({ message: "Invalid Email / Password" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
module.exports = UserController;
