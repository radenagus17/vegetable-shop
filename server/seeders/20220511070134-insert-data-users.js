"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Joko",
          role: "Kasir",
          email: "joko1@mail.com",
          password: "joko1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Mirna",
          role: "Pelayan",
          email: "mirna2@mail.com",
          password: "mirna2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  },
};
