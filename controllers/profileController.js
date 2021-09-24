const { Profile, User, Post } = require("../models");
const { Op } = require("sequelize");
class ProfileController {
  static async profile(req, res) {
    try {
      const profile = await Profile.findOne({
        where: {
          UserId: req.user.id,
        },
        include: [User, Post],
      });
      res.status(200).json(profile);
    } catch (error) {
      console.log(error);
    }
  }
  static async editProfile(req, res) {
    const { description, profile_image_url, profile_background_image_url } =
      req.body;
    try {
      const account = await Profile.findOne({
        where: {
          UserId: req.user.id,
        },
      });
      if (account) {
        if (profile_image_url && profile_background_image_url) {
          const update = await Profile.update(
            {
              profile_use_background_image: true,
              description,
              profile_image_url,
              profile_background_image_url,
              default_profile_image: false,
            },
            {
              where: {
                UserId: req.user.id,
              },
              returning: true,
            }
          );
          res.status(200).json(update[1][0]);
        } else if (!profile_image_url && profile_background_image_url) {
          const update = await Profile.update(
            {
              profile_use_background_image: true,
              description,
              profile_background_image_url,
              default_profile_image: true,
            },
            {
              where: {
                UserId: req.user.id,
              },
              returning: true,
            }
          );
          res.status(200).json(update);
        } else if (profile_image_url && !profile_background_image_url) {
          const update = await Profile.update(
            {
              profile_use_background_image: false,
              description,
              profile_image_url,
              default_profile_image: false,
            },
            {
              where: {
                UserId: req.user.id,
              },
              returning: true,
            }
          );
          res.status(200).json(update[1][0]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async getAllProfiles(req, res) {
    try {
      const data = await Profile.findAll({
        include: [User, Post],
        where: {
          UserId: {
            [Op.ne]: req.user.id,
          },
        },
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = ProfileController;
