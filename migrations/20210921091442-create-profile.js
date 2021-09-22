"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      default_profile_image: {
        type: Sequelize.BOOLEAN,
      },
      description: {
        type: Sequelize.STRING,
      },
      profile_image_url: {
        type: Sequelize.STRING,
      },
      profile_use_background_image: {
        type: Sequelize.BOOLEAN,
      },
      followers_count: {
        type: Sequelize.INTEGER,
      },
      following: {
        type: Sequelize.INTEGER,
      },
      profile_background_image_url: {
        type: Sequelize.STRING,
      },
      UserId: {
        unique: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Profiles");
  },
};
