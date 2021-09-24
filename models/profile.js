"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: "UserId" });
      Profile.hasMany(models.Post, { foreignKey: "ProfileId" });
    }
  }
  Profile.init(
    {
      default_profile_image: DataTypes.BOOLEAN,
      description: DataTypes.STRING,
      profile_image_url: DataTypes.STRING,
      profile_use_background_image: DataTypes.BOOLEAN,
      followers_count: DataTypes.INTEGER,
      following: DataTypes.INTEGER,
      profile_background_image_url: DataTypes.STRING,
      UserId: { type: DataTypes.INTEGER, unique: true },
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
