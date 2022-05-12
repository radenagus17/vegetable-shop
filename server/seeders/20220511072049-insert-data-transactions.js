"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Transactions",
      [
        {
          ItemId: 3,
          CompanyId: 3,
          UserId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ItemId: 2,
          CompanyId: 1,
          UserId: 2,
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
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Transactions", null, {
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
