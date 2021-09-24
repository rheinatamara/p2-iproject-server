"use strict";
const { Model } = require("sequelize");
const { encode } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Profile, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "full name cannot be empty",
          },
          notNull: true,
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Username is already exists",
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Username cannot be empty",
          },
          notNull: true,
        },
      },
      location: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "password cannot be empty",
          },
          notNull: true,
        },
      },
    },
    {
      hooks: {
        beforeCreate: (instance, options) => {
          instance.password = encode(instance.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
