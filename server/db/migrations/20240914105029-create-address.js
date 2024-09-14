"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
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
        deletedAt: {
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
      }
    );
  },
  // Add the index after creating the table
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("address");
  },
};
