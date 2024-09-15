"use strict";
const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/connectionDB");
module.exports = sequelize.define(
  "address",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.UUID,
      references: {
        model: "user",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    street: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    zipCode: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },
  {
    associations: () => ({
      user: {
        foreignKey: "userId",
        targetKey: "id",
        onDelete: "CASCADE",
      },
    }),
    paranoid: true,
    freezeTableName: true,
    modelName: "address",
  }
);
