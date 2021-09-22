"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.Profile, { foreignKey: "ProfileId" });
    }
  }
  Post.init(
    {
      text: DataTypes.STRING,
      image_url: DataTypes.STRING,
      favourites_count: DataTypes.INTEGER,
      ProfileId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
